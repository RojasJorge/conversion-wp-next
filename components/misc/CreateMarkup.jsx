import { useStoreState } from "easy-peasy";
import PropTypes from "prop-types";

const CreateMarkup = ({ content }) => {
  const converted = useStoreState((state) => state.global.createMarkup);

  return (
    <>
      <div dangerouslySetInnerHTML={converted(content)} />
    </>
  );
};

CreateMarkup.propTypes = {
  content: PropTypes.string.isRequired,
};

CreateMarkup.defaultProps = {
  content: <></>,
};

export default CreateMarkup;
