import { useEffect } from "react";
import Web from "../layout/Web";
import HomePage from "../components/home";
import xhr, { config } from "../xhr";
import { useStoreActions } from "easy-peasy";

const Home = (data) => {
  const updateLanding = useStoreActions(
    (actions) => actions.global.updateLanding
  );

  useEffect(() => {
    updateLanding(data);
  }, []);

  return (
    <Web title="Portada">
      <HomePage />
    </Web>
  );
};

Home.getInitialProps = async () => {
  let response = {};

  await config("/")
    .then(async (json) => {
      response.custom_fields = json;

      await xhr(`/pages/${json.page_on_front}?_embed`)
        .then((resp) => {
          response.frontpage = resp;
        })
        .catch((err) => console.log(err));
    })
    .catch();

  return response;
};

export default Home;
