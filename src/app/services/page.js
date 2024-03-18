import React from 'react';
import NavBar from '../navbar/NavBar';
import Image from "next/image";
import transactionicon from "../../../public/images/icons/transaction.png";
import marketinsightsicon from "../../../public/images/icons/market-insights.png";
import strategicicon from "../../../public/images/icons/strategic.png";
import productsourcingicon from "../../../public/images/icons/sourcing.png";
import riskmanagementicon from "../../../public/images/icons/risk-management.png";
import growthicon from "../../../public/images/icons/growth.png";
import Footer from '../footer';

const Services = () => {
  return (
    <>
      <NavBar />
      <div className="cnt-tlt-bg">
        <div className="cnt-tlt-banner">
          <h1>Services</h1>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 col-xl-4 col-lg-4 col-sm-12 srv-trans-blk'>
            <div className='serv-blk'>
              <div className='srv-bg'>
                <div className='serv-icon'>
                  <Image src={transactionicon} alt="transaction facilation" width={60} height={60} />
                </div>
                <h6>Transaction Facilitation</h6>
                <p>Streamlining the buying and selling process.</p>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-xl-4 col-lg-4 col-sm-12 srv-trans-blk'>
            <div className='serv-blk'>
            <div className='srv-bg'>
              <div className='serv-icon'>
                <Image src={marketinsightsicon} alt="transaction facilation" width={60} height={60} />
              </div>
              <h6>Market Insights</h6>
              <p>Providing valuable information and analysis on commodity markets.</p>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-xl-4 col-lg-4 col-sm-12 srv-trans-blk'>
            <div className='serv-blk'>
            <div className='srv-bg'>
              <div className='serv-icon'>
                <Image src={strategicicon} alt="transaction facilation" width={60} height={60} />
              </div>
              <h6>Strategic Guidance</h6>
              <p>Offering expert advice to optimize trading endeavors.</p>
              </div>
            </div>
          </div>

          <div className='col-md-6 col-xl-4 col-lg-4 col-sm-12 srv-trans-blk'>
            <div className='serv-blk'>
            <div className='srv-bg'>
              <div className='serv-icon'>
                <Image src={productsourcingicon} alt="transaction facilation" width={60} height={60} />
              </div>
              <h6>Product Sourcing</h6>
              <p>Locating and securing quality commodities for clients.</p>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-xl-4 col-lg-4 col-sm-12 srv-trans-blk'>
            <div className='serv-blk'>
            <div className='srv-bg'>
              <div className='serv-icon'>
                <Image src={riskmanagementicon} alt="transaction facilation" width={60} height={60} />
              </div>
              <h6>Risk Management</h6>
              <p>Implementing strategies to mitigate trading risks.</p>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-xl-4 col-lg-4 col-sm-12 srv-trans-blk'>
            <div className='serv-blk'>
            <div className='srv-bg'>
              <div className='serv-icon'>
                <Image src={growthicon} alt="transaction facilation" width={60} height={60} />
              </div>
              <h6>Sustainable Growth Solutions</h6>
              <p>Advising on long-term strategies for sustainable business growth.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Services