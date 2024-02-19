import Container from "../../Container";
import Heading from "../../Heading";
import CateItem from "../CateItem";
import BeachIcon from "../../../icon/BeachIcon";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import PrevArrow from "../../../icon/PrevArrow";
import NextArrow from "../../../icon/NextArrow";

const SelectCate = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>
  };
  return (
    <section className="py-[136px]">
      <Container>
        <Heading
          title="Select Category"
          className="text-[40px] text-StatGray mb-4"
        />
        <p className="text-SlateGray text-2xl">
          Sost Brilliant reasons Entrada should be your one-stop-shop!
        </p>

        <Slider {...settings}>
          <CateItem
            className="mt-16"
            Title="Beach Activity"
            Value={4.9}
            Activities="196 Activities"
            Icon={<BeachIcon />}
          />
          <CateItem
            className="mt-16"
            Title="Beach Activity"
            Value={4.9}
            Activities="196 Activities"
            Icon={<BeachIcon />}
          />
          <CateItem
            className="mt-16"
            Title="Beach Activity"
            Value={4.9}
            Activities="196 Activities"
            Icon={<BeachIcon />}
          />
          <CateItem
            className="mt-16"
            Title="Beach Activity"
            Value={4.9}
            Activities="196 Activities"
            Icon={<BeachIcon />}
          />
        </Slider>
        {/* <Flex className="justify-between">
          <CateItem
            className="mt-16"
            Title="Beach Activity"
            Value={4.9}
            Activities="196 Activities"
            Icon={<BeachIcon />}
          />
          <CateItem
            className="mt-16"
            Title="Beach Activity"
            Value={4.9}
            Activities="196 Activities"
            Icon={<BeachIcon />}
          />
          <CateItem
            className="mt-16"
            Title="Beach Activity"
            Value={4.9}
            Activities="196 Activities"
            Icon={<BeachIcon />}
          />
        </Flex> */}
      </Container>
    </section>
  );
};

export default SelectCate;

