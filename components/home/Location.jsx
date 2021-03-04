import { useStoreState } from "easy-peasy";
import CreateMarkup from "../misc/CreateMarkup";

const Location = () => {
  const landing = useStoreState((state) => state.global.landing);

  return (
    <div id="location" className="location bg-fixed bg-repeat py-24 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="tems-center">
              <CreateMarkup content={landing?.custom_fields?.landing_location} />
            </div>
          </div>
          <div>
            <img src={landing?.custom_fields?.landing_location_image} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
