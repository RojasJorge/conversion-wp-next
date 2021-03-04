import HomeHeader from "../home/HomeHeader";
import HomeSlider from "../home/Slider";
import HeaderLegend from "../home/HeaderLegend";
import TextBanner from "../home/TextBanner";
import Apartments from "../apartments/index";
import Contact from "../home/Contact";
import LuxurySlider from "../home/LuxurySlider";
import Location from "../home/Location";
import Finishes from "../home/Finishes";

const HomePage = () => {
  return (
    <>
      <HomeHeader />
      <HomeSlider />
      <HeaderLegend />
      <TextBanner />
      <Apartments />
      <Contact />
      <LuxurySlider />
      <Location />
      <Finishes />
    </>
  );
};

export default HomePage;
