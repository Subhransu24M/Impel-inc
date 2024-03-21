import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdMiscellaneousServices } from "react-icons/md";
import { GrContactInfo } from "react-icons/gr";
import Link from 'next/link';
const Footer = () => {
    return (
      <>
      <h6 className="ftr">© 2024 , Impel Inc</h6>
      <div className="ftr-mbl-mnu-blk">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="ftr-mnu-icon-blk">
                <Link href="/">
                <span><IoHomeOutline /></span>
              <p>Home</p>
                </Link>
              </div>
              
            </div>
            <div className="col-3">
            <div className="ftr-mnu-icon-blk">
              <Link href="/blue-ribbon">
              <span><MdOutlineProductionQuantityLimits /></span>
              <p>Products</p>
              </Link>
              </div>
            </div>
            <div className="col-3">
            <div className="ftr-mnu-icon-blk">
              <Link href="/services">
              <span><MdMiscellaneousServices /></span>
              <p>Services</p>
              </Link>
              
              </div>
            </div>
            <div className="col-3">
            <div className="ftr-mnu-icon-blk">
              <Link href="/contact-us">
              <span><GrContactInfo /></span>
              <p>Inquiry</p>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }
  
  export default Footer