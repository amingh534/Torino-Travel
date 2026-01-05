import { serverFetch } from "../components/core/services/http";
import AllTours from "../components/template/AllTours";
import Attribute from "../components/template/Attribute";
import AuthForm from "../components/template/authForm";
import Info from "../components/template/Info";
import Searchbar from "../components/template/Searchbar";
import Slider from "../components/template/Slider";

async function Home() {
  const data = await serverFetch("tour");
  return (
    <>
      <Searchbar />
      <AllTours toursData={data} />
      <Info />
      <Slider />
      <Attribute />
      <AuthForm />
    </>
  );
}

export default Home;
