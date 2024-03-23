"use client"
import { useState } from 'react';
import axios from 'axios';
const ContactForm = () => {
    const [fname, setFname] = useState('');
    const [cnumber, setCnumber] = useState('');
    const [mailid, setMailid] = useState('');
    const [country, setCountry] = useState('');
    const [message, setMessage] = useState('');
    // const [loading, setLoading] = useState('false');


    const handleSubmit = async (e) => {
        // setLoading(true);
        e.preventDefault();
        // Call a function to send email using Nodemailer with formData

        if (fname == "" && cnumber == "" && mailid == "" && country == "" && message == "") {
            // setLoading(false);
            alert("Please enter all the field");
            return false;
        }

        await fetch("../api/sendResendmail", {
            method: "POST",
            body: JSON.stringify({ fname, cnumber, mailid, country, message }),
        })
            .then((res) => res.json())
            .then((data) => {
                // setLoading(false);
                if (data && data.id) {
                    alert(`Thank you for your interest ${fname}! We will get back to you soon!`);
                    setFname("");
                    setCnumber("");
                    setMailid("");
                    setCountry("");
                    setMessage("");
                } else {
                    alert("Apologies! Please try again.");
                }
            })
            .catch((err) => {
                // setLoading(false);
                alert("Ooops! unfortunately some error has occurred.");
            });
        return true;




        // Call a function to send email using Nodemailer with formData -2

        //     try {
        //         const response = await axios.post('/api/sendEmail', {
        //           fname,
        //           cnumber,
        //           mailid,
        //           country,
        //           message,
        //         });
        //         console.log(response.data);
        //       } catch (error) {
        //         console.error(error);
        //       }

    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h4>Lets Talk About Your Requirements </h4>
                <p>After we get some information from you, well get in touch with you soon !!!.</p>
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12">
                        <input type="text" name="fname" className="form-control" placeholder="First name" value={fname} onChange={(e) => setFname(e.target.value)} />
                    </div>
                    <div className="col-md-6 col-sm-12 col-lg-6 col-xl-6">
                        <input type="text" name="cnumber" className="form-control" placeholder="Contact Number" value={cnumber} onChange={(e) => setCnumber(e.target.value)} />
                    </div>
                    <div className="col-md-6 col-sm-12 col-lg-6 col-xl-6">
                        <input type="text" name="mailid" className="form-control" placeholder="Mail Id" value={mailid} onChange={(e) => setMailid(e.target.value)} />
                    </div>
                    <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12">
                        <input type="text" name="country" className="form-control" placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)} />
                    </div>
                    <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12">
                        <textarea className="form-control" name="message" id="exampleFormControlTextarea1" rows="3" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                    </div>
                </div>
                <div className="cnt-smt-btn">
                    <button className="btn btn-primary" type="submit">Submit</button>
                    {/* <button
                        type="submit"
                        className="flex justify-center rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
                    >
                        {loading ? (
                            <div
                                style={{
                                    borderTopColor: "transparent",
                                }}
                                className="w-4 h-4 border-2 border-white border-solid rounded-full animate-spin"
                            ></div>
                        ) : (
                            "Submit"
                        )}
                    </button> */}
                </div>
            </form>
        </>
    )
}

export default ContactForm