import { Link } from "react-router-dom";
import Container from "../../Container";
import Flex from "../../Flex";
import Heading from "../../Heading";
import BestSellerItem from "../BestSellerItem";

const BestSeller = () => {
  return (
    <section className="pt-24">
      <Container>
        {/* heading */}
        <Flex className='items-center justify-between'>
          <div>
            <Heading
              title="Best Seller"
              className="text-[40px] text-StatGray mb-4"
            />
            <p className="text-SlateGray text-2xl">
              Sost Brilliant reasons Entrada should be your one-stop-shop!
            </p>
          </div>
          <div className="">
            <Link to="/search-result" className="text-2xl text-white bg-BrandOne py-7 px-10 rounded-full">Check All</Link>
          </div>
        </Flex>

        {/* content */}
        <BestSellerItem/>
      </Container>
    </section>
  );
};

export default BestSeller;
