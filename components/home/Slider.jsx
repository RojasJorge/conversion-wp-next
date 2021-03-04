import { useStoreState } from "easy-peasy";
import { useState, useEffect } from "react";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import xhr from "../../xhr";

SwiperCore.use([Autoplay]);

const HomeSlider = () => {
  const landing = useStoreState((state) => state.global.landing);

  const [slides, setSlider] = useState([]);

  useEffect(() => {
    if (landing && landing?.custom_fields?.page_on_front) {
      xhr(
        `/media?parent=${landing.custom_fields.page_on_front}&exclude=${landing.frontpage.featured_media}`
      )
        .then((json) => setSlider(json))
        .catch((err) => console.log(err));
    }
  }, [landing]);

  return (
    <>
      <Swiper
        slidesPerView={3}
        autoplay={{
          delay: 3000,
        }}
        breakpoints={{
          // when window width is <= 320px
          320: {
            slidesPerView: 1,
            spaceBetweenSlides: 10,
          },
          // when window width is <= 480px
          480: {
            slidesPerView: 2,
            spaceBetweenSlides: 20,
          },
          // when window width is <= 640px
          640: {
            slidesPerView: 3,
            spaceBetweenSlides: 30,
          },
        }}
        loop={true}
        watchSlidesVisibility
        watchSlidesProgress
      >
        {slides?.map((slide, key) => (
          <SwiperSlide key={key}>
            <a
              data-fancybox="gallerySlider"
              href={slide?.media_details?.sizes?.large.source_url}
            >
              <img
                className="home-slide-image"
                src={slide?.media_details?.sizes?.langing_slider.source_url}
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HomeSlider;
