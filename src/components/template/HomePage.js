import AllTours from "./AllTours";
import Attribute from "./Attribute";
import Card from "./Card";
import Info from "./Info";
import Searchbar from "./Searchbar";
import Slider from "./Slider";
function HomePage() {
  return (
    <>
        <Searchbar />
        <AllTours />
        <Card />
        <Info />
        <Slider />
        <Attribute />
    </>
  );
}

export default HomePage;
