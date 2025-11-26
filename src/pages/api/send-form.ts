import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, mobile, email, location, pincode, comments } = req.body;

  // Email Content
  const emailMessage = `
Hi Team,

${name} is looking for RAVS services. Here are the details:

Name: ${name}
Mobile: ${mobile}
Email: ${email}
Location: ${location}
Pincode: ${pincode}
Comments: ${comments}

Regards,
RAVS Website
  `;

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL, // RAVS email
      subject: "New RAVS Profile Download Request",
      text: emailMessage,
    });

    return res.status(200).json({ message: "Success" });
  } catch (error) {
    return res.status(500).json({ message: "Mail Error", error });
  }
}
