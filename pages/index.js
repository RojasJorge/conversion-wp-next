import Web from '../layout/Web'
import HomePage from '../components/home'
import xhr, { config } from '../xhr'

const Home = data =>
  <Web title="Portada" data={data}>
    <HomePage data={data} />
  </Web>

Home.getInitialProps = async () => {
  let response = {}

  await config("/")
    .then(async (json) => {
      response.config = json

      await xhr(`/pages/${json.page_on_front}`)
        .then((resp) => {
          response.landing = resp
        })
        .catch((err) => console.log(err))
    })
    .catch();

    return response
}

export default Home
