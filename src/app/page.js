import Image from "next/image";
import styles from "./page.module.css";
import Header from './header';
import Footer from "./footer";
import HomeContent from "./home-content/HomeContent";

export default function Home() {
  return (
    <>
    <Header/>
    <HomeContent/>
    <Footer/>
    </>
    
  );
}
