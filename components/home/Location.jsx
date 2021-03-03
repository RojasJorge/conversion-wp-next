const Location = ({ data }) => {
  const createMarkup = (content) => {
    return { __html: content };
  };

  return (
    <div id="location" className="location py-24 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div
              className="tems-center"
              dangerouslySetInnerHTML={createMarkup(
                data?.data?.config?.landing_location
              )}
            />
          </div>
          <div>
            <img src={data?.data?.config?.landing_location_image} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
