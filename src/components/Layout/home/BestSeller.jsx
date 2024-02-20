import { Link } from "react-router-dom";
import Container from "../../Container";
import Flex from "../../Flex";
import Heading from "../../Heading";
import BestSellerItem from "../BestSellerItem";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import london from "../../../assets/london.png";
import sea from "../../../assets/sea.png";
import Market from "../../../assets/market.png";

const BestSeller = () => {
  
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
  };
  return (
    <section className="pt-24">
      <Container>
        {/* heading */}
        <Flex className="items-center justify-between mb-16">
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
            <Link
              to="/search-result"
              className="text-2xl text-white bg-BrandOne py-7 px-10 rounded-full"
            >
              Check All
            </Link>
          </div>
        </Flex>

        {/* content */}
        <Slider {...settings}>
          <BestSellerItem
            src={london}
            alt="london"
            title="Train Tour Skyline"
            desc="Check Out Daily Deals and Promotion on Hotels. Easy & Fast Booking"
            price="895.50"
            value="30%"
            offer="10 Days | 09 Night"
          />
          <BestSellerItem
            src={sea}
            alt="london"
            title="Train Tour Skyline"
            desc="Check Out Daily Deals and Promotion on Hotels. Easy & Fast Booking"
            price="895.50"
            value="30%"
            offer="10 Days | 09 Night"
          />
          <BestSellerItem
            src={Market}
            alt="london"
            title="Train Tour Skyline"
            desc="Check Out Daily Deals and Promotion on Hotels. Easy & Fast Booking"
            price="895.50"
            value="30%"
            offer="10 Days | 09 Night"
          />
        </Slider>
      </Container>
    </section>
  );
};

export default BestSeller;
