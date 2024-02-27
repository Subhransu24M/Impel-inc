import Image from "next/image";

import companyimage2 from "../../../public/images/productimages/Blue-Ribbon-Pet-Floor-Cleaner.jpeg";
import companyimage3 from "../../../public/images/productimages/Blue-Ribbon-Organic-Hand-Soap.jpeg";
import ContactForm from "../contactform/ContactForm";

const HomeContent = () => {
    return (
        <>
            <div className="container pt-5 pb-5">
                <div className="row">
                    <div className="col-md-6 col-sm-12 col-lg-6 col-xl-6">
                        <Image src={companyimage3} alt="" width={250} height={250} />
                        <Image src={companyimage2} alt="" width={250} height={250} />
                        
                    </div>
                    <div className="col-md-6 col-sm-12 col-lg-6 col-xl-6">
                        <div className="hm-abt-sec">
                            <h5>Welcome to Impel Inc.</h5>
                            <h1>Who we are</h1>
                            <p>Welcome to a cleaner, greener world with Impel Inc - where quality meets eco-consciousness! <b>*Product and Services Offered:*</b></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cta-sec">
                <div className="cta-sec-bg-clr">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-xl-6 col-lg-6 col-sm-12">
                                <div className="cta-lft-blk">
                                    <h3>Need Help ?</h3>
                                    <h4> We are ready to answer your questions</h4>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-6 col-lg-6 col-sm-12">
                                <div className="cta-rgt-blk">
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeContent