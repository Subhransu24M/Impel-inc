import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request){
  // console.log ("trying to send me");
  // console.log(process.env.SMTP_SERVER);
  // console.log(process.env.SMTP_USERNAME);
  // console.log(process.env.SMTP_PASSWORD);
    const { fname, cnumber, mailid, country, message } = await request.json();
    const port = parseInt(process.env.SMTP_PORT)
    try {
        const transporter = nodemailer.createTransport({
            // service:'godaddy',
            host: process.env.SMTP_SERVER,
            pool: true,
            port,
            secure: port === 465 ? false : false, // true for 465, false for other ports
            auth: {
              user: process.env.SMTP_USERNAME,
              pass: process.env.SMTP_PASSWORD,
            },
            tls :{
              rejectUnauthorized : false
            }
          })
    
          const mailOption ={
            from: 'info@next.webtricxdigital.com',
            to: 'subhransuseo18@gmail.com',
            subject: "🎉New submission to your contact form!",
            html:`
             <h3>Impel Inc Form Details</h3>
             <li>Name : ${fname}</li>
             <li>Name : ${cnumber}</li>
             <li>Name : ${mailid}</li>
             <li>Name : ${country}</li>
             <li>Name : ${message}</li>
            `
          }
    
          const result  = await transporter.sendMail(mailOption)
          // console.log(result)

          return NextResponse.json({message : "Email Sent Sucessfully"},{status :200})
    } catch (error) {
      // console.log(error)
        return NextResponse.json({message : "Email Send Failed"}, {status : 500})

    }
}