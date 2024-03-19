import ContactForm from "../contactform/ContactForm"
import Footer from "../footer"
import NavBar from "../navbar/NavBar"

export const metadata = {
    title: "Contact us | Impel INC",
    description: "Reach out to us for more information about our service and products.",
  };

const page = () => {
    return (
        <>
            <NavBar />
            <div className="cnt-tlt-bg">
                <div className="cnt-tlt-banner">
                    <h1>Contact us</h1>
                </div>
            </div>
            <div className="cnt-us-blk">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-xl-6 col-lg-6 col-sm-12">
                            <div className="cnt-lft-blk">
                                <h3>How to <span className="cnt-bld">contact</span> us</h3>
                                <p>If you’ve got questions or ideas you would like to share, send a message. For anything more specific, please use one of the addresses listed below.</p>
                                <div className="cnt-loc-blk">
                                    <h5>Our Location</h5>
                                    <p>3838 Oak Lawn Ave STE#1000 Dallas, TX 75219 , United States</p>
                                </div>
                                <div className="cnt-loc-blk">
                                    <h5>Our Email</h5>
                                    <a href="mailto:info@impelinc.com">info@impelincproducts.com</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-6 col-lg-6 col-sm-12">
                            <div className="cnt-frm-blk">
                                <ContactForm />
                                {/* <form>
                                    <h4>Let's Talk About Your Requirements </h4>
                                    <p>After we get some information from you, we’ll get in touch with you soon !!!.</p>
                                    <div className="row">
                                        <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12">
                                            <input type="text" className="form-control" placeholder="First name" />
                                        </div>
                                        <div className="col-md-6 col-sm-12 col-lg-6 col-xl-6">
                                            <input type="text" className="form-control" placeholder="Contact Number" />
                                        </div>
                                        <div className="col-md-6 col-sm-12 col-lg-6 col-xl-6">
                                            <input type="text" className="form-control" placeholder="Mail Id" />
                                        </div>
                                        <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12">
                                            <input type="text" className="form-control" placeholder="Country" />
                                        </div>
                                        <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12">
                                            <input type="textarea" className="form-control" placeholder="Message" />
                                        </div>
                                    </div>
                                    <div className="cnt-smt-btn">
                                    <button className="btn btn-primary" type="submit">Submit</button>
                                    </div>
                                </form> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default page