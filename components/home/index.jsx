import HomeHeader from "../home/HomeHeader";
import HomeSlider from "../home/Slider";
import HeaderLegend from "../home/HeaderLegend";
import TextBanner from "../home/TextBanner";
import Apartments from "../apartments/index";
import Contact from "../home/Contact";
import LuxurySlider from "../home/LuxurySlider";
import Location from "../home/Location";

const HomePage = (data) => {
  return (
    <>
      <HomeHeader data={data} />
      <HomeSlider data={data} />
      <HeaderLegend data={data} />
      <TextBanner data={data} />
      <Apartments />
      <Contact data={data} />
      <LuxurySlider data={data} />
      <Location data={data} />
    </>
  );
};

export default HomePage;
