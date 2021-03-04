import { useStoreState } from "easy-peasy";
import CreateMarkup from "../misc/CreateMarkup";

const HomeHeader = () => {
  const landing = useStoreState((state) => state.global.landing);

  const featured = () => {
    const thumbUrl = landing?.frontpage?._embedded["wp:featuredmedia"];
    if (
      thumbUrl &&
      thumbUrl[0] &&
      thumbUrl[0]?.media_details?.sizes?.landing_header
    ) {
      return `url(${thumbUrl[0]?.media_details?.sizes?.landing_header?.source_url})`;
    }
    return "none";
  };

  return (
    <>
      <div
        style={{ backgroundImage: featured() }}
        className={`bg-black py-24 md:h-screen h-auto bg-top md:bg-center bg-no-repeat bg-fixed md:bg-cover flex justify-center content-center`}
      >
        <div className="tems-center justify-center text-center md:pt-60">
          {landing?.custom_fields?.header_text.length > 0 && (
            <CreateMarkup content={landing?.custom_fields?.header_text} />
          )}
        </div>
      </div>
    </>
  );
};

export default HomeHeader;
