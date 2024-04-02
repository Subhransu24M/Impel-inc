import Image from "next/image";

import companyimage2 from "../../../public/images/productimages/Blue-Ribbon-Pet-Floor-Cleaner.webp";
import companyimage3 from "../../../public/images/hmsld10.jpg";
import ContactForm from "../contactform/ContactForm";

const HomeContent = () => {
    return (
        <>
            <div className="container pt-5 pb-5">
                <div className="row">
                    <div className="col-md-8 col-sm-12 col-lg-8 col-xl-8">
                        <div className="hm-abt-sec">
                            <h1>About us</h1>
                            <p>Welcome to a cleaner, greener world with Impel Inc - where quality meets eco-consciousness! <b>Product and Services Offered</b></p>
                            <p>Your trusted partner in commodities trading. With years of experience and a passion for the markets, we specialize in providing comprehensive trading solutions tailored to your needs.</p>
                            <p>At Impel Inc., we understand the complexities of the commodities market and the importance of timely, informed decisions. Our team of experts is dedicated to delivering personalized strategies and exceptional service to help you navigate the ever-changing landscape of commodity trading.</p>
                            <p>
                                Transparency, integrity, and reliability are at the core of everything we do. We prioritize building long-term relationships based on trust and mutual success. When you choose Impel Inc., you are choosing a partner committed to your prosperity.
                            </p>
                            <p className="hm-cta-stm">
                                Get in touch today to explore how we can help you achieve your trading goals.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12 col-lg-4 col-xl-4">
                        <div className="cnt-blk-hm" data-aos="fade-left">
                            <Image src={companyimage3} alt="" width={300} height={230} />
                            <div className="hm-rght-cta-sec-blk">
                                <h3>Get in Touch</h3>
                                <hr></hr>
                                <p>3838 Oak Lawn Ave STE#1000 Dallas, TX 75219</p>
                                <div className="c-hm-blk">
                                    <a href="mailto:info@impelincproducts.com">info@impelincproducts.com</a>
                                </div>
                                <div className="c-hm-blk">
                                    <a href="tel:+12149846342">+1 214-984-6342</a>
                                </div>
                            </div>

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
                                    <h4>We are ready to answer your questions</h4>
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