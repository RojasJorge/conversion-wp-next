import { useState, useEffect } from "react";
import xhr from "../../xhr";
import SingleApartment from "./Single";
import {delay} from "lodash";

const Apartments = (_) => {
  const [loading, setLoading] = useState({
    icon: (
      <div className="text-center text-2xl my-8">
        <i className="fas fa-circle-notch fa-spin"></i>
      </div>
    ),
    active: false,
  });

  const [apartments, setApartments] = useState({
    current: 1,
    list: [],
  });
  const [current, setCurrent] = useState({
    item: null,
    thumbnail: null,
    classes: "",
  });

  const getApartments = async (cat = 2, current = 1) => {
    setLoading({ ...loading, active: true });
    setCurrent({ ...current, classes: "animate__fadeOutDown" });
    return await xhr(`/posts?categories=${cat}&order=asc`)
      .then((list) => {
        setApartments({ ...apartments, list, current });
        delay(_ => getFeaturedMedia(list[0]), 300);
        setLoading({ ...loading, active: false });
      })
      .catch((err) => {
        setLoading({ ...loading, active: false });
        console.log(err);
      });
  };

  const showSingleContent = async (item) => {
    setLoading({ ...loading, active: true });
    if (current.item && item.id !== current.item.id) {
      setCurrent({ ...current, classes: "animate__fadeOutDown" });
    }
    delay(_ => getFeaturedMedia(item, item.featured_media), 300);
  };

  const getFeaturedMedia = async (item) => {
    await xhr(`/media/${item.featured_media}`)
      .then((thumbnail) => {
        setCurrent({
          ...current,
          item,
          thumbnail,
          classes: "animate__fadeInUp",
        });
        setLoading({ ...loading, active: false });
      })
      .catch((err) => {
        setLoading({ ...loading, active: false });
        console.log(err);
      });
  };

  useEffect(() => {
    getApartments(2);
  }, []);

  return (
    <div className="container mx-auto md:h-screen">
      <div className="flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div
            className={`py-5 border-b-2 border-gray ${
              apartments.current === 1 ? "border-black" : "border-gray"
            }`}
          >
            <h3
              onClick={(e) => getApartments(2, 1)}
              className={`text-center leading-none cursor-pointer ${
                apartments.current === 1 && "tab-apartments-active"
              }`}
            >
              APARTAMENTOS 1 NIVEL
            </h3>
          </div>
          <div
            className={`py-5 border-b-2 border-gray ${
              apartments.current === 2 ? "border-black" : "border-gray"
            }`}
          >
            <h3
              onClick={(e) => getApartments(3, 2)}
              className={`text-center leading-none cursor-pointer ${
                apartments.current === 2 && "tab-apartments-active"
              }`}
            >
              APARTAMENTOS 2 NIVELES
            </h3>
          </div>
        </div>
      </div>
      <div className="flex-auto">
        <div className="grid md:my-5 md:gap-4 grid-cols-2 md:grid-cols-none md:grid-flow-col">
          {apartments?.list?.map((apartment, key) => (
            <div className="text-center hover:bg-secondary" key={key}>
              <h4
                onClick={(_) => showSingleContent(apartment)}
                className={`leading-none text-uppercase cursor-pointer py-6 px-6 text-primary border border-t-0 border-b-2 border-gray-100 md:border-0 focus:font-bold ${
                  current?.item?.id === apartment?.id ? "bg-secondary" : ""
                }`}
              >
                <span></span>
                {apartment.title.rendered}
              </h4>
            </div>
          ))}
        </div>
      </div>

      {loading.active && loading.icon}

      {current.item && (
        <SingleApartment
          apartment={current?.item}
          thumbnail={current?.thumbnail?.guid?.rendered}
          classes={current.classes}
        />
      )}
    </div>
  );
};

export default Apartments;
