import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import xhr from "../../xhr";

const HomeSlider = ({ data }) => {
  const [slides, setSlider] = useState([]);

  useEffect(() => {
    xhr(
      `/media?parent=${data?.data?.config?.page_on_front}&exclude=${data?.data?.landing?.featured_media}`
    )
      .then((json) => setSlider(json))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Swiper slidesPerView={3} watchSlidesVisibility watchSlidesProgress>
        {slides?.map((slide, key) => (
          <SwiperSlide key={key}>
            <img
              className="home-slide-image"
              src={slide?.media_details?.sizes?.langing_slider.source_url}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HomeSlider;
