const TextBanner = (data) => {
  const createMarkup = (content) => {
    return { __html: content };
  };

  return (
    <>
      <div className="p-8 md:p-12 bg-third">
        <div
          className="tems-center justify-center text-center"
          dangerouslySetInnerHTML={createMarkup(
            data?.data?.data?.config?.text_banner
          )}
        />
      </div>
    </>
  );
};

export default TextBanner;
