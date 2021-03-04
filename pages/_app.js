import { StoreProvider } from "easy-peasy";
import store from "../store";
import "../styles/globals.scss";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "nprogress/nprogress.css";

function MyApp({ Component, pageProps }) {
  
  return (
    <StoreProvider store={store}>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;
