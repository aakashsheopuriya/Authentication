


import nodemailer from "nodemailer";

const emailSend = async (user, otp, type) => {
  try {
    const transport = nodemailer.createTransport({
      host: "smtp.gmail.com", // Gmail hostname
      port: 465,
      secure: true, // Use SSL
      auth: {
        user: process.env.SMTP_USER, // Sender email address
        pass: process.env.SMTP_PASS, // App password
      },
    });

    // Define email templates based on the type
    let subject = "";
    let htmlBody = "";

    switch (type) {
      case "welcome":
        subject = "Welcome to Auth App!";
        htmlBody = `<b>Welcome ${user}!</b><br>Thank you for signing up for our platform. We are excited to have you on board!`;
        break;

      case "reset":
        subject = "Password Reset Request ✔";
        htmlBody = `<b>Hello ${user},</b><br>Your OTP for password reset is <strong>${otp}</strong>. If this wasn't requested by you, please report it to support@gmail.com.`;
        break;

      case "verify":
        subject = "Email Verification ✔";
        htmlBody = `<b>Hello ${user},</b><br>Your OTP for email verification is <strong>${otp}</strong>. Please verify your email to activate your account.`;
        break;

      default:
        throw new Error("Invalid email type");
    }

    // Send the email
    const info = await transport.sendMail({
      from: process.env.SMTP_USER, // Sender address
      to: user, // Receiver's email
      subject: subject, // Email subject
      html: htmlBody, // HTML body content
    });

    return info; // Return email info
  } catch (error) {
    console.error("Server error:", error.message);
    throw error; // Throw error for the calling function to handle
  }
};

export default emailSend;
