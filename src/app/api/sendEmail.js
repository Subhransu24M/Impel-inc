import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { fname, cnumber, emailid, country, message } = req.body;

    // Initialize Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: 'sg2plcpnl0223.prod.sin2.secureserver.net',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: 'info@impelincproducts.com',
        pass: 'ImpeLInc@2024',
      },
    });

    // Send mail with defined transport object
    try {
      await transporter.sendMail({
        from: `"${fname}" <${emailid}>`,
        to: 'info@impelincproducts.com',
        
        subject: 'New Message from Contact Form',
        text: fname,cnumber,emailid,country,message,
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
