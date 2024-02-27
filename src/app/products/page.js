import Header from '../header';
import Footer from "../footer";
import NavBar from '../navbar/NavBar';
import Image from "next/image";
import img1 from "../../../public/images/productimages/Blue Ribbon - Laundry Sets.jpeg"
import img2 from "../../../public/images/productimages/Blue-Ribbon-Dish-Soap.jpeg"
import img3 from "../../../public/images/productimages/Washing Powder.jpeg"
import img4 from "../../../public/images/productimages/Hand Soap 1.jpeg"
import img5 from "../../../public/images/productimages/Washing Powder 1.jpeg"
import img6 from "../../../public/images/productimages/Laundry-Solutions.png"
import img7 from "../../../public/images/productimages/Blue-Ribbon-Dish-Soap.jpeg"
import img8 from "../../../public/images/productimages/Blue-Ribbon-Floor-Cleaner.png"
import img9 from "../../../public/images/productimages/Blue-Ribbon-Pet-Floor-Cleaner.jpeg"
import ContactUs from '../button/ContactUs';
import ProductTitleBanner from '../producttitlebanner/ProductTitleBanner';
const Products = () => {
  return (
    <>
      <NavBar />
      <ProductTitleBanner/>
      <div className='products-list-blk'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 col-xl-4 col-lg-4 col-sm-12'>
              <div className='prod-blk'>
                <Image src={img1} alt="Eco-Friendly Laundry Solutions" width={300} />
                <h2>Eco-Friendly Laundry Solutions</h2>
                <p>Experience the power of our "BrandName eco Laundry Sheets" - the epitome of sustainable cleanliness.</p>
                <ContactUs />
              </div>
            </div>
            <div className='col-md-6 col-xl-4 col-lg-4 col-sm-12'>
              <div className='prod-blk'>
                <Image src={img2} alt="Eco-Friendly Laundry Solutions" width={300} />
                <h2>Gentle Dishwashing Excellence</h2>
                <p>Conquer grease with our "Grease fighting dish soap" - the eco-conscious choice for sparkling dishes.</p>
                <ContactUs />
              </div>
            </div>
            <div className='col-md-6 col-xl-4 col-lg-4 col-sm-12'>
              <div className='prod-blk'>
                <Image src={img3} alt="Eco-Friendly Laundry Solutions" width={300} />
                <h2>Hypoallergenic Laundry Marvels</h2>
                <p>Safeguard your family with our "Hypoallergenic washing powder" - designed for the most sensitive skin.</p>
                <ContactUs />
              </div>
            </div>
            <div className='col-md-6 col-xl-4 col-lg-4 col-sm-12'>
              <div className='prod-blk'>
                <Image src={img4} alt="Eco-Friendly Laundry Solutions" width={300} />
                <h2>Organic Hand Care</h2>
                <p>Nourish your hands with our "Organie hand soap" - a touch of nature for every wash.</p>
                <ContactUs />
              </div>
            </div>
            <div className='col-md-6 col-xl-4 col-lg-4 col-sm-12'>
              <div className='prod-blk'>
                <Image src={img5} alt="Eco-Friendly Laundry Solutions" width={300} />
                <h2>Problem Solving Solutions</h2>
                <p>Discover the "Best detergent for sensitive skin" and bid farewell to skin irritations forever.</p>
                <ContactUs />
              </div>
            </div>
            <div className='col-md-6 col-xl-4 col-lg-4 col-sm-12'>
              <div className='prod-blk'>
                <Image src={img6} alt="Eco-Friendly Laundry Solutions" width={300} />
                <h2>Stain-Free Laundry Adventures</h2>
                <p>Say goodbye to stains with our specialty "Stain removal laundry soap" your laundry's new superhero.</p>
                <ContactUs />
              </div>
            </div>
            <div className='col-md-6 col-xl-4 col-lg-4 col-sm-12'>
              <div className='prod-blk'>
                <Image src={img7} alt="Eco-Friendly Laundry Solutions" width={300} />
                <h2>Brand and Nature Harmony</h2>
                <p>Immerse yourself in the goodness of our "Natural ingredient dish soap" - where brand meets ecofriendly innovation.</p>
                <ContactUs />
              </div>
            </div>
            <div className='col-md-6 col-xl-4 col-lg-4 col-sm-12'>
              <div className='prod-blk'>
                <Image src={img8} alt="Eco-Friendly Laundry Solutions" width={300} />
                <h2>Lifestyle Essentials</h2>
                <p>Elevate your home cleaning with "Family-safe cleaning products" designed for an eco-conscious lifestyle.</p>
                <ContactUs />
              </div>
            </div>
            <div className='col-md-6 col-xl-4 col-lg-4 col-sm-12'>
              <div className='prod-blk'>
                <Image src={img9} alt="Eco-Friendly Laundry Solutions" width={300} />
                <h2>Pet-Friendly Cleaning Bliss</h2>
                <p>Keep your home pet-friendly with our "Pet-friendly floor cleaner" - because your pets deserve a clean space 100.</p>
                <ContactUs />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Products