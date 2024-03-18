import React from 'react'
import Footer from "../footer"
import NavBar from "../navbar/NavBar"
import Image from "next/image";
import otherprdimg from "../../../public/images/productimages/otherproducts/other-prodct.jpeg"
import ContactUs from '../button/ContactUs';
const page = () => {
  return (
    <>
      <NavBar />
      <div className="cnt-tlt-bg">
        <div className="cnt-tlt-banner">
          <h1>Other Products</h1>
        </div>
      </div>
      <div className='othr-prd-blk'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-5 col-xl-5 col-lg-5 col-sm-12'>
              <div className='oth-prd-img'>
                <Image src={otherprdimg} alt="other products" width={400} />
              </div>
            </div>
            <div className='col-md-7 col-xl-7 col-lg-7 col-sm-12'>
              <div className='other-prd-desc-blk'>
                <h5>Specification</h5>
                <div className='othr-spc'>
                  <div className='othr-inr-blk'><strong>Grade:</strong><span>DX51D, Q195-Q235, SPCC, SGCC, all according to the customer's request.</span></div>
                  <div className='othr-inr-blk'><strong>Standard:</strong><span>JIS G3302 1998, ASTM A653M/A924M 2004, all according to the customer's request.</span></div>
                  <div className='othr-inr-blk'><strong>Thickness:</strong><span>0.28MM- 3MM as your request.</span></div>
                  <div className='othr-inr-blk'><strong>Width:</strong><span>600MM - 1250MMas your request.</span></div>
                  <div className='othr-inr-blk'><strong>Length:</strong><span>1000 mm - 2500 mm or customized.</span></div>
                  <div className='othr-inr-blk'><strong>Zinc coating weight:</strong><span>40g/m2-275g/m2, double side.</span></div>
                  <div className='othr-inr-blk'><strong>Spangle:</strong><span>big spangle, normal spangle, small spangle, non-spangle.</span></div>
                  <div className='othr-inr-blk'><strong>Surface treatment:</strong><span>Chemical passivating oils, passivating + oils.</span></div>
                  <div className='othr-inr-blk'><strong>Edge:</strong><span>mill edge, cut edge.</span></div>
                  <div className='othr-inr-blk'><strong>MOQ:</strong><span>Min trial order 10 ton each thickness,1x20' per delivery.</span></div>
                </div>
                <div className='othr-prd-btn'><ContactUs/></div>
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
