
const ContactForm = () => {
    return (
        <>
            <form>
                <h4>Lets Talk About Your Requirements </h4>
                <p>After we get some information from you, well get in touch with you soon !!!.</p>
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
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
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