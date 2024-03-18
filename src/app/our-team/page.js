import OurTeam from "../Ourteam/OurTeam"
import Footer from "../footer"
import NavBar from "../navbar/NavBar"

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