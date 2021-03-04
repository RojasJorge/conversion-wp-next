// import { useEffect } from "react";
import PropTypes from "prop-types";
import { useStoreState, useStoreRehydrated } from "easy-peasy";
import Head from "next/head";
import Navbar from "../components/structure/Navbar";
import Footer from "../components/structure/Footer";
// import Router from "next/router";
// import NProgress from "nprogress";

const Web = ({ children, title }) => {
  const rehydrated = useStoreRehydrated();
  const landing = useStoreState((state) => state.global.landing);

  // useEffect(() => {
  //   Router.onRouteChangeStart = (url) => {
  //     NProgress.start();
  //   };
  //   Router.onRouteChangeComplete = () => NProgress.done();
  //   Router.onRouteChangeError = () => NProgress.done();
  // }, [landing]);

  return (
    <>
      {rehydrated ? (
        <>
          <Head>
            <title>{title} | Monad</title>
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
              integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
              crossorigin="anonymous"
            />
            {landing?.custom_fields?.google_tag_manager_code && (
              <script
                type="text/javascript"
                dangerouslySetInnerHTML={{
                  __html: landing?.custom_fields?.google_tag_manager_code,
                }}
              ></script>
            )}
          </Head>
          <div className="site">
            <Navbar />
            <div className="site--contents">{children}</div>
            <Footer />
          </div>
        </>
      ) : (
        <div className="w-full bg-primary h-screen flex items-center justify-center text-white">Loading...</div>
      )}
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
