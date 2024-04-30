import Footer from "../footer";
import NavBar from "../navbar/NavBar";
import { BlueRibbonLoad } from "../blue-ribbon/BlueRibbonLoad";

// Import other images as needed

export const metadata = {
  title: "Blue Ribbon Products | Impel INC",
  description: "Your trusted partner in commodities trading. With years of experience and a passion for the markets, we specialize in providing comprehensive trading solutions tailored to your needs.",
};

const Page = () => {
  return (
    <>
      <NavBar />
      <BlueRibbonLoad/>
      <Footer />
    </>
  );
};

export default Page;
