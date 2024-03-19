import OurTeam from "../Ourteam/OurTeam"
import Footer from "../footer"
import NavBar from "../navbar/NavBar"

export const metadata = {
  title: "Our Team | Impel INC",
  description: "Our team of experts is dedicated to delivering personalized strategies and exceptional service to help you navigate the ever-changing landscape of commodity trading.",
};

const page = () => {
  return (
    <>
      <NavBar/>
      <div className="cnt-tlt-bg">
        <div className="cnt-tlt-banner">
          <h1>Our Team</h1>
        </div>
      </div>
      <OurTeam/>
      <Footer/>
    </>
    
  )
}

export default page