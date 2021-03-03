import { useState, useEffect } from "react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import xhr from "../../xhr";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const LuxurySlider = (_) => {
  const [slides, setSlider] = useState([]);

  useEffect(() => {
    xhr(`/posts?_embed&categories=4&order=asc`)
      .then((json) => {
        if (json && json.length > 0) {
          setSlider(json);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const getFeaturedMedia = async (item) => {
    await xhr(`/media/${item.featured_media}`)
      .then((thumbnail) => {})
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div id="amenities" className="flex bg-black md:py-24 bg-luxury-slider luxury-slider h-auto items-center">
      <div className="container mx-auto">
        <div className="w-full text-center p-4">
          <p className="text-secondary text-white text-xs text-uppercase p-4">
            Apartamentos en Zona 10
          </p>
          <p className="w-24 border-b border-white mx-auto mb-4 border-secondary"></p>
          <h3 className="text-uppercase text-secondary letter-spacing-5 text-4xl">
            A Luxury for living
          </h3>
        </div>
        <div className="w-full">
          <Swiper
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            pagination={{ type: "fraction" }}
            navigation={true}
            loop={true}
            effect="fade"
            watchSlidesVisibility
            watchSlidesProgress
          >
            {slides.length > 0 &&
              slides.map((slide, key) => {
                /** Extract wp:featuredmedia as featured */
                const {
                  _embedded: { "wp:featuredmedia": featured },
                } = slide;

                return (
                  <SwiperSlide key={key}>
                    <img
                      src={
                        featured[0]?.media_details?.sizes?.luxury_slider
                          ?.source_url
                      }
                    />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default LuxurySlider;
