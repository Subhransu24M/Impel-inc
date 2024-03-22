"use client"
import { useState } from 'react';
import axios from 'axios';
const ContactForm = () => {
    const [fname, setFname] = useState('');
    const [cnumber, setCnumber] = useState('');
    const [mailid, setMailid] = useState('');
    const [country, setCountry] = useState('');
    const [message, setMessage] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        // Call a function to send email using Nodemailer with formData

        try {
            const response = await axios.post('/api/sendEmail', {
              fname,
              cnumber,
              mailid,
              country,
              message,
            });
            console.log(response.data);
          } catch (error) {
            console.error(error);
          }
    };

    

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h4>Lets Talk About Your Requirements </h4>
                <p>After we get some information from you, well get in touch with you soon !!!.</p>
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12">
                        <input type="text" name="fname" className="form-control" placeholder="First name" value={fname} onChange={(e) => setFname(e.target.value)} required/>
                    </div>
                    <div className="col-md-6 col-sm-12 col-lg-6 col-xl-6">
                        <input type="text" name="cnumber" className="form-control" placeholder="Contact Number" value={cnumber} onChange={(e) => setCnumber(e.target.value)} required/>
                    </div>
                    <div className="col-md-6 col-sm-12 col-lg-6 col-xl-6">
                        <input type="text" name="mailid" className="form-control" placeholder="Mail Id" value={mailid} onChange={(e) => setMailid(e.target.value)} required/>
                    </div>
                    <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12">
                        <input type="text" name="country" className="form-control" placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)} required/>
                    </div>
                    <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12">
                    <textarea className="form-control" name="message" id="exampleFormControlTextarea1" rows="3" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                    </div>
                </div>
                <div className="cnt-smt-btn">
                    <button className="btn btn-primary" type="submit">Submit</button>
                </div>
            </form>
        </>
    )
}

export default ContactForm