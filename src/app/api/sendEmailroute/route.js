import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request){
    const { fname, cnumber, mailid, country, message } = await request.json();

    try {
        const transporter = nodemailer.createTransport({
            service:'godaddy',
            host: 'sg2plcpnl0223.prod.sin2.secureserver.net',
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
              user: 'info@impelincproducts.com',
              pass: 'ImpeLInc@2024',
            },
          })
    
          const mailOption ={
            from: 'info@impelincproducts.com',
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
    
          await transporter.sendMail(mailOption)
          return NextResponse.json({message : "Email Sent Sucessfully"},{status :200})
    } catch (error) {
        return NextResponse.json({message : "Email Send Failed"}, {status : 500})
    }
}