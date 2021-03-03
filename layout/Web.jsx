import PropTypes from "prop-types";
import Head from "next/head";
import Navbar from "../components/structure/Navbar";
import Footer from "../components/structure/Footer";

const Web = ({ children, title, data }) => {
  return (
    <>
      <Head>
        <title>{title} | Monad</title>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: data?.config?.google_tag_manager_code,
          }}
        ></script>
      </Head>
      <div className="site">
        <Navbar data={data} />
        <div className="site--contents">{children}</div>
        <Footer />
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
