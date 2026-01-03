import nodemailer from "nodemailer";
import Busboy from "busboy";

export const config = {
  api: {
    bodyParser: false, // REQUIRED for file uploads
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const busboy = Busboy({ headers: req.headers });

    const fields = {};
    const attachments = [];

    busboy.on("field", (name, value) => {
      fields[name] = value;
    });

    busboy.on("file", (name, file, info) => {
      const { filename, mimeType } = info;

      const allowedTypes = [
        "application/pdf",
        "image/png",
        "image/jpeg",
        "application/zip",
        "application/octet-stream", // STL
        "model/stl",
      ];

      if (!allowedTypes.includes(mimeType)) {
        file.resume();
        throw new Error("Invalid file type");
      }

      const chunks = [];
      file.on("data", (data) => chunks.push(data));
      file.on("end", () => {
        attachments.push({
          filename,
          content: Buffer.concat(chunks),
        });
      });
    });

    await new Promise((resolve, reject) => {
      busboy.on("finish", resolve);
      busboy.on("error", reject);
      req.pipe(busboy);
    });

    /* NODEMAILER */
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Quote Request" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: fields.email,
      subject: `New Quote Request from ${fields.name}`,
      html: `
        <h3>New Quote Request</h3>
        <p><strong>Name:</strong> ${fields.name}</p>
        <p><strong>Email:</strong> ${fields.email}</p>
        <p><strong>Phone:</strong> ${fields.phone || "N/A"}</p>
        <p><strong>Material:</strong> ${fields.material}</p>
        <p><strong>Quantity:</strong> ${fields.quantity}</p>
        <p><strong>Description:</strong></p>
        <p>${fields.description}</p>
      `,
      attachments,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message || "Email failed",
    });
  }
}
