// import Image from "next/image";
// import styles from "./page.module.css";
import Header from './header';
import Footer from "./footer";
import HomeContent from "./home-content/HomeContent";
// import OurTeam from "./Ourteam/OurTeam";

export const metadata = {
  title: "Your trusted partner in commodities trading | Impel INC",
  description: "Your trusted partner in commodities trading. With years of experience and a passion for the markets, we specialize in providing comprehensive trading solutions tailored to your needs.",
};

export default function Home() {
  return (
    <>
    <Header/>
    <HomeContent/>
    <Footer/>
    </>
    
  );
}
