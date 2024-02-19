import { TrendInfo } from "../../constant/data";
import Flex from "../Flex";
import { FaRegHeart, FaStar, FaRegClock, FaCheck } from "react-icons/fa6";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import PrevArrow from "../../icon/PrevArrow";
import NextArrow from "../../icon/NextArrow";
import Badge from "../Badge";

const TrendItem = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <section>
      <Slider {...settings}>
        {TrendInfo.map((val, i) => (   
            <div
              className="hover:shadow-xl mt-16 pt-4 pb-8 shadow-md rounded-[10px] relative"
              key={i}
            >
              {/* product img */}
              <img src={val.url} alt="trending" className="mx-auto" />
              <Badge value={val.discount} className="top-7 right-10" />

              {/* heading */}
              <Flex className="justify-between items-center px-7 text-2xl font-semibold text-StatGray mt-9 mb-2">
                <h3>{val.title}</h3>
                <FaRegHeart />
              </Flex>
              <p className="px-7 mb-7 text-base text-CadetGray">
                {val.subTitle}
              </p>

              {/* price and varies part */}
              <div className="px-7">
                <Flex className="justify-between">
                  {/* price */}
                  <div>
                    <p className="text-base text-CadetGray leading-none">
                      from
                    </p>
                    <p className="text-OxfordBlue text-[32px] font-semibold leading-none py-1">
                      ${val.Price}
                    </p>
                    <p className="text-base text-CadetGray leading-none">
                      *Price varies
                    </p>
                  </div>
                  {/* ratting */}
                  <div>
                    <Flex className="text-BrandTwo text-sm">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </Flex>
                    <p className="text-sm text-StatGray mt-2">4.7 (108)</p>
                  </div>
                </Flex>
              </div>

              {/* other info part */}
              <Flex className="items-center px-7 gap-2 mt-10">
                <FaRegClock className="text-BrandOne" /> <p>7 Days</p>
              </Flex>
              <Flex className="items-center px-7 gap-2">
                <Flex className="items-center text-base gap-2">
                  <FaCheck className="text-BrandOne" />
                  <p className="text-SlateGray">Free Cancellation</p>
                </Flex>
                <Flex className="items-center text-base gap-2">
                  <FaCheck className="text-BrandOne" />
                  <p className="text-SlateGray">New on Estrada</p>
                </Flex>
              </Flex>
            </div>
        ))}
      </Slider>
    </section>
  );
};

export default TrendItem;
