import Image from "next/image";
import styles from "./page.module.css";
import Header from './header';
import Footer from "./footer";
import HomeContent from "./home-content/HomeContent";
import OurTeam from "./Ourteam/OurTeam";

export default function Home() {
  return (
    <>
    <Header/>
    <HomeContent/>
    <Footer/>
    </>
    
  );
}
