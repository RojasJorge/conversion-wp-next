import { useState, useEffect } from "react";
import xhr from "../../xhr";

const HomeHeader = ({ headerTitle, data }) => {
  const [featured, setFeatured] = useState();

  const createMarkup = (content) => {
    return { __html: content };
  };

  useEffect(() => {
    xhr(`/media/${data.data.landing.featured_media}`).then((json) => {
      setFeatured(json);
    });
  }, []);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${featured?.media_details?.sizes?.landing_header?.source_url})`,
          minHeight: featured
            ? featured.media_details.sizes?.landing_header?.height
            : 670,
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
        className={`bg-black flex justify-center content-center`}
      >
        <div
          className="tems-center justify-center text-center md:pt-60"
          dangerouslySetInnerHTML={createMarkup(
            data?.data?.config?.header_text
          )}
        />
      </div>
    </>
  );
};

export default HomeHeader;
