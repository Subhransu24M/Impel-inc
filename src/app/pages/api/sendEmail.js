import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { fname, cnumber,mailid,country, message } = req.body;

    // Initialize Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send mail with defined transport object
    try {
      await transporter.sendMail({
        from: `"${fname}" <${mailid}>`,
        to: 'info@impelincproducts.com',
        subject: 'New Message from Contact Form',
        text: fname,cnumber,mailid,country,message,
      });
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to send email' });
    }
  } else {
    res.setHeader('Allow', ['POST']); // Set allowed methods
    res.status(405).end(`Method ${req.method} Not Allowed`); // Return 405 error
  }
}
