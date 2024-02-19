import SelectCate from "../components/Layout/home/SelectCate";
import Banner from "../components/Layout/home/Banner"
import Trending from "../components/Layout/home/Trending";
import Destination from "../components/Layout/home/Destination";
import BestSeller from "../components/Layout/home/BestSeller";

const Home = () => {
  return (
    <section className="">
      <Banner/>
      <SelectCate/>
      <Trending/>
      <Destination/>
      <BestSeller/>
    </section>
  );
};

export default Home;
