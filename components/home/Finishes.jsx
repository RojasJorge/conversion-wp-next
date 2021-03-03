import { useState, useEffect } from "react";
import xhr from "../../xhr";

const Finishes = (_) => {
  const [finishes, setFinishes] = useState([]);

  const getFinishes = (_) => {
    xhr("/posts?categories=5&order=asc&_embed")
      .then((json) => {
        setFinishes(json);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getFinishes();
  }, []);

  return (
    <div className="finishes bg-primary py-24 px-4 md:py-24" id="finishes">
      <div className="flex md:py-24 h-auto items-center">
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
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {finishes.length > 0 &&
                finishes.map((f) => {
                  const {
                    title,
                    id,
                    _embedded: { "wp:featuredmedia": featured },
                  } = f;

                  return (
                    <div key={id}>
                      <div className="bg-gray-700 min-h-52">
                        <img src={featured[0].media_details.sizes.landing_finishes.source_url} />
                      </div>
                      <h3 className="text-secondary my-4 text-uppercase text-base">
                        {title}
                      </h3>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finishes;
