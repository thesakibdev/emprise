import SelectCate from "../components/Layout/home/SelectCate";
import Banner from "../components/Layout/home/Banner"
import Trending from "../components/Layout/home/Trending";
import Destination from "../components/Layout/home/Destination";
import BestSeller from "../components/Layout/home/BestSeller";
import TourGuides from "../components/Layout/home/TourGuides";
import CatBanner from "../components/Layout/home/CatBanner";
import Subscribe from "../components/Layout/home/Subscribe";
import Sponsor from "../components/Layout/Sponsor";
import Contact from "../components/Layout/home/Contact";

const Home = () => {
  return (
    <section className="">
      <Banner/>
      <SelectCate/>
      <Trending/>
      <Destination/>
      <BestSeller/>
      <TourGuides/>
      <CatBanner/>
      <Subscribe/>
      <Sponsor/>
      <Contact/>
    </section>
  );
};

export default Home;
