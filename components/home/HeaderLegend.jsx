const SliderLegend = (data) => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(/lineal-logo.png)`,
        }}
        className="w-full mx-2 md:w-2/5 text-primary text-lg mx-auto md:bg-center h-auto p-2 md:h-96 bg-no-repeat text-center flex items-center"
      >
        {data?.data?.data?.config?.header_legend}
      </div>
    </>
  );
};

export default SliderLegend;
