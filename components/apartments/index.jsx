import { useState, useEffect } from "react";
import xhr from "../../xhr";
import SingleApartment from "./Single";

const Apartments = (_) => {
  const [apartments, setApartments] = useState([]);
  const [current, setCurrent] = useState();

  const getApartments = async (cat = 2) => {
    return await xhr(`/posts?categories=${cat}&order=asc`)
      .then((json) => setApartments(json))
      .catch((err) => console.log(err));
  };

  const showSingleContent = (item) => {
    setCurrent(item);
  };

  useEffect(() => {
    getApartments(2);
  }, []);

  return (
    <div className="container mx-auto">
      <div className="flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="py-4 border-b-2 border-gray">
            <h3 onClick={() => getApartments(2)} className="text-center">
              APARTAMENTOS 1 HABITACIÓN
            </h3>
          </div>
          <div className="py-4 border-b-2 border-gray">
            <h3 onClick={() => getApartments(3)} className="text-center">
              APARTAMENTOS 2 HABITACIONES
            </h3>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="grid grid-cols-5">
          {apartments.map((apartment, key) => (
            <div className="text-center p-4 hover:bg-secondary" key={key}>
              <h4 
                onClick={(_) => showSingleContent(apartment)} 
                className={(current?.id === apartment?.id) ? 'bg-secondary text-primary py-4 px-6 text-uppercase' : 'py-4 px-6 text-primary text-uppercase'}
                >
                  <span></span>
                {apartment.title.rendered}
              </h4>
            </div>
          ))}
        </div>
      </div>
      {/* <pre>{JSON.stringify(current, false, 2)}</pre> */}
      {current && <SingleApartment apartment={current} />}
    </div>
  );
};

export default Apartments;
