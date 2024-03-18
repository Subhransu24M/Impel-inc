import Link from 'next/link';
import Image from "next/image";
import '../navbar/navbar.css';
import impelinclogo from "../../../public/images/logo/impel-inc-logo.png";
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container">
                <Link className="navbar-brand" href="/">
                    <Image src={impelinclogo} alt="impel inc logo" width={150} />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                        </li>

                        <li class="nav-item dropdown">
                            <Link class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Products
                            </Link>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link class="dropdown-item" href="/blue-ribbon">Blue Ribbion</Link></li>
                                <li><Link class="dropdown-item" href="/other-products">Other Products</Link></li>
                            </ul>
                        </li>

                        {/* <li className="nav-item">
                            <Link className="nav-link" href="/products">Products</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link" href="/services">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/our-team">Our Team</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/contact-us">Contact us</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default NavBar