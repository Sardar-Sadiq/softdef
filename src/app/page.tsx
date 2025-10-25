import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import O2Section from "./components/O2Section";
import Reviews from "./components/Reviews";
import TopSellingSection from "./components/TopSellingSection";


export default function Home() {
  return (
    <>
      <HeroSection/>
      <TopSellingSection/>
      <Reviews/>
      <O2Section/>
      <Footer/>
    </>
  );
}
