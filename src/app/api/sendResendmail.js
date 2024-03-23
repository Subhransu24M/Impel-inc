import emailTemplate from '../emailTemplate/emailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req, res) => {
  try {
    const { fname, cnumber, mailid, country, message } = JSON.parse(req.body);

    const data = await resend.sendEmail({
        from: `${process.env.FROM_EMAIL}`,
        to: `${process.env.TO_EMAIL}`,
        subject: "🎉New submission to your contact form!",
        html: "",
        react: emailTemplate({ fname, cnumber, mailid, country, message })
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};