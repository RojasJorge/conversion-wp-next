import HomeHeader from "../home/HomeHeader";
import HomeSlider from "../home/Slider";
import HeaderLegend from "../home/HeaderLegend";
import TextBanner from "../home/TextBanner";
import Apartments from "../apartments/index";

const HomePage = (data) => {
  return (
    <>
      <HomeHeader data={data} />
      <HomeSlider data={data} />
      <HeaderLegend data={data} />
      <TextBanner data={data} />
      <Apartments />
    </>
  );
};

export default HomePage;
