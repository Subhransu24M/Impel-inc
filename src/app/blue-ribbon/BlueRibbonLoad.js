"use client"
import { useState } from 'react';
import './loadmorebtn.css';
import ContactUs from "../button/ContactUs";
import Image from "next/image";
import img1 from "../../../public/images/productimages/Eco-Friendly-Laundry-Solutions.png";
import img2 from "../../../public/images/productimages/Gentle-Dishwashing-Excellence.png";
import img3 from "../../../public/images/productimages/Washing Powder 1.webp";
import img4 from "../../../public/images/productimages/Organic-Hand-Care.png"
import img5 from "../../../public/images/productimages/Washing Powder 1.webp"
import img6 from "../../../public/images/productimages/Stain-Free-Laundry-Adventures.png"
import img7 from "../../../public/images/productimages/harmony.webp"
import img8 from "../../../public/images/productimages/Blue-Ribbon-Floor-Cleaner.webp"
import img9 from "../../../public/images/productimages/Pet-Friendly-Cleaning-Bliss.png"
import img10 from "../../../public/images/productimages/Laundry-Detergent-Liquid-Concentrated.png";
import img11 from "../../../public/images/productimages/Refillable-and-Sustainable-Solutions.png";

export const BlueRibbonLoad = () => {
    const [visibleItems, setVisibleItems] = useState(3);
    const items = [
        { image: img1, title: "Eco-Friendly Laundry Solutions", description: "Explore the effectiveness of our Blue Ribbon eco-friendly laundry sheets - representing sustainable cleanliness at its finest. Say goodbye to skin irritations forever with the best detergent for sensitive skin." },
        { image: img2, title: "Gentle Dishwashing Excellence", description: "Defeat grease with our powerful Grease-Fighting Liquid Dish Soap - the eco-conscious, non-toxic, and biodegradable choice for sparkling dishes." },
        { image: img3, title: "Hypoallergenic Laundry Marvels", description: "Safeguard your family with our Hypoallergenic washing powder - designed for the most sensitive skin." },

        { image: img4, title: "Organic Hand Care", description: "Nourish your hands with our Organie hand soap - a touch of nature for every wash." },
        { image: img5, title: "Problem Solving Solutions", description: "Discover the Best detergent for sensitive skin and bid farewell to skin irritations forever." },
        { image: img6, title: "Stain-Free Laundry Adventures", description: "Say goodbye to stains with our specialty Stain removal laundry soap your laundrys new superhero." },
        { image: img7, title: "Brand and Nature Harmony", description: "Immerse yourself in the goodness of our Natural ingredient dish soap - where brand meets ecofriendly innovation." },
        { image: img8, title: "Lifestyle Essentials", description: "Elevate your home cleaning with Family-safe cleaning products designed for an eco-conscious lifestyle." },
        { image: img9, title: "Pet-Friendly Cleaning Bliss", description: "Keep your home pet-friendly with our Blue Ribbon Pet-Safe floor cleaner - because your pets deserve a clean space too." },
        { image: img10, title: "Laundry Detergent Liquid Concentrated", description: "Blue Ribbon Laundry Detergent Liquid Concentrated: Powerful Cleaning in a Convenient Package. Our high-performance wash for all fabrics comes in a 1-gallon size with 4 bottles included. Our phosphate-free formula is perfect for home, commercial, and industrial loads, delivering outstanding results every time. Simplify your laundry routine with our liquid detergent, proven to be more effective on stains and offering a subtle scent that won't irritate sensitive noses. Say goodbye to stubborn odors and hello to fresh, clean clothes with Blue Ribbon's Laundry Detergent Liquid Concentrated." },
        { image: img11, title: "Refillable and Sustainable Solutions", description: "Introducing Our Sustainable Refillable Soap Dispenser: Reduce Waste for a Cleaner Planet." },
        // Add more items as needed
    ];

    const loadMore = () => {
        setVisibleItems(prevVisibleItems => prevVisibleItems + 3);
    };

    return (
        <>
            <div className="cnt-tlt-bg">
                <div className="cnt-tlt-banner">
                    <h1>Blue Ribbon</h1>
                </div>
            </div>
            <div className='products-list-blk'>
                <div className='container'>
                    <div className='row'>
                        {items.slice(0, visibleItems).map((item, index) => (
                            <div key={index} className='col-md-6 col-xl-4 col-lg-4 col-sm-12'>
                                <div className='prod-blk'>
                                    <div className='prod-blk-img'>
                                    <Image src={item.image} alt={item.title} />
                                    </div>
                                    
                                    <h2>{item.title}</h2>
                                    <p>{item.description}</p>
                                    <ContactUs />
                                </div>
                            </div>
                        ))}
                    </div>
                    {visibleItems < items.length && (
                        <div className='row'>
                            <div className='col-12'>
                                {/* <button onClick={loadMore} className='load-more-button'>Load More</button> */}
                                <div className='btn-load-more-blk'>
                                <button onClick={loadMore} className="btn ld-mr-btn" type="button">Load More
                                </button>
                                </div>
                                
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
