import { useState, useEffect, useRef } from "react";
import xhr from "../../xhr";

const SingleApartment = ({ apartment }) => {
  const [thumbnail, setThumbnail] = useState();

  const createMarkup = (content) => {
    return { __html: content };
  };

  const getFeaturedImage = async (_) => {
    await xhr(`/media/${apartment?.featured_media}`).then((json) =>
      setThumbnail(json)
    );
  };

  useEffect(() => {
    getFeaturedImage();
  }, []);

  return (
    <>
      <div className="grid grid-rows-3 grid-flow-col gap-4 my-8">
        <div className="row-span-3">
          <h3 className="text-3xl">{apartment?.title?.rendered}</h3>
          <div
            className="flex flex-row self-middle items-center"
            dangerouslySetInnerHTML={createMarkup(apartment?.content?.rendered)}
          />
        </div>
        <div className="row-span-2 col-span-2">

          <img src={thumbnail?.guid?.rendered} />
        </div>
      </div>
    </>
  );
};

export default SingleApartment;
