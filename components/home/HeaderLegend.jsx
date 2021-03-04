import { useStoreState } from "easy-peasy";

const SliderLegend = () => {
  const landing = useStoreState(state => state.global.landing);
  return (
    <>
      <div
        style={{
          backgroundImage: `url(/lineal-logo.png)`,
        }}
        className="w-full m-6 md:w-2/4 text-primary text-base mx-auto bg-contain bg-center bg-clip-padding md:bg-clip-content md:bg-auto h-auto p-4 md:h-96 bg-no-repeat text-center flex items-center"
      >
        {landing?.custom_fields?.header_legend}
      </div>
    </>
  );
};

export default SliderLegend;
