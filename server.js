import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(
  cors({
    origin: [
      "https://muhammad-aashir-adnan.netlify.app",
      "http://localhost:5173",
    ],
    methods: ["GET", "POST", "OPTIONS"],
    credentials: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is running" });
});

// Create transporter
const transporter = nodemailer.createTransporter({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER, // Your Gmail address
    pass: process.env.GMAIL_APP_PASSWORD, // App password (not regular password)
  },
});

// Verify transporter
transporter.verify((error, success) => {
  if (error) {
    console.log("SMTP Error:", error);
  } else {
    console.log("SMTP Server ready to send emails");
  }
});

// Contact form endpoint
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  // Validate input
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER, // Send to yourself
    subject: `New Contact Form Message from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">New Contact Form Submission</h2>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; background: white; padding: 10px; border-radius: 4px;">${message}</p>
        </div>
        <p style="color: #666; font-size: 12px;">Sent from your portfolio website</p>
      </div>
    `,
    replyTo: email,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Email sending error:", error);
    res.status(500).json({
      error: "Failed to send message",
      details: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
