import Image from "next/image";
import slider1img from "../../../public/images/hmsl2.png";
import slider2img from "../../../public/images/hmsl3.png";
// import slider3img from "../../../public/images/Slider3.png";
import Link from "next/link";
const HeroSlider = () => {
    
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <Image src={slider1img} className="d-block w-100 sld-img" alt="..." height={600} />
                        <div className="carousel-caption d-md-block" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1500">
                            <h2>WELCOME TO <span className="sld-hdr-spn">IMPEL INC.</span></h2>
                            <p>where quality meets eco-consciousness!</p>
                            <Link href="/contact-us" type="submit" className="btn btn-primary">Contact us</Link>       
                        </div>

                    </div>
                    <div className="carousel-item">
                        <Image src={slider2img} className="d-block w-100 sld-img" alt="..." height={600} />
                        <div className="carousel-caption d-md-block">
                            {/* <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p> */}
                        </div>
                    </div>
                    {/* <div className="carousel-item">
                        <Image src={slider3img} className="d-block w-100" alt="..." height={600} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div> */}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default HeroSlider