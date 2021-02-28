import PropTypes from "prop-types";
import Head from "next/head";
import Navbar from "../components/structure/Navbar";

const Web = ({ children, title, data }) => {
  return (
    <>
      <Head>
        <title>{title} | Monad</title>
      </Head>
      <div className="site">
        <Navbar data={data} />
        <div className="site--contents">{children}</div>
        <div className="site--footer"></div>
      </div>
    </>
  );
};

Web.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

Web.defaultProps = {
  children: <></>,
  title: "New page",
};

export default Web;
