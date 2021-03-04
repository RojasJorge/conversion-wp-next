import { useStoreState } from "easy-peasy";
import CreateMarkup from "../misc/CreateMarkup";

const TextBanner = () => {
  const landing = useStoreState((state) => state.global.landing);

  return (
    <>
      <div id="apartments" className="p-8 md:p-12 bg-third">
        <div
          className="tems-center justify-center text-center"
        >
          <CreateMarkup content={landing?.custom_fields?.text_banner} />
          </div>
      </div>
    </>
  );
};

export default TextBanner;
