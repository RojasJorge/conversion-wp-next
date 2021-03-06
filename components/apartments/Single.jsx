const SingleApartment = ({ apartment, thumbnail, classes }) => {
  const createMarkup = (content) => {
    return { __html: content };
  };

  return (
    <>
      <div
        className={`flex-1 md:flex text-center md:text-left items-center my-8}`}
      >
        <div
          className={`grid md:auto-cols-max animate__animated animate__faster ${classes}`}
        >
          <h3 className="text-3xl mt-4 md:mt-0 md:text-3xl apartment-title letter-spacing-5 text-uppercase p-4">
            {apartment?.title?.rendered}
          </h3>
          <div
            className="text-base px-4 mb-4 md:mb-0"
            dangerouslySetInnerHTML={createMarkup(apartment?.content?.rendered)}
          />
        </div>
        <div>
          <img
            src={thumbnail}
            className={`animate__animated animate__faster ${classes}`}
          />
        </div>
      </div>
    </>
  );
};

export default SingleApartment;
