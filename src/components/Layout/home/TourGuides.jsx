import { Link } from "react-router-dom";
import Container from "../../Container";
import Flex from "../../Flex";
import Heading from "../../Heading";

import GuidesCard from "../GuidesCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import PrevArrow from "../../../icon/PrevArrow";
import NextArrow from "../../../icon/NextArrow";
import James from "../../../assets/james.png";
import John from "../../../assets/john.png";

const TourGuides = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
  };
  return (
    <section className="pt-24">
      <Container>
        {/* heading */}
        <div className="items-center justify-between">
          <Heading
            title="Tour Guides"
            className="text-[40px] text-StatGray mb-4"
          />
          <p className="text-SlateGray text-2xl">
            Sost Brilliant reasons Entrada should be your one-stop-shop!
          </p>
        </div>

        <Slider {...settings}>
          <GuidesCard
            img={James}
            title="Adventure Guru"
            descOne="Check Out Daily Deals and Promotion on hotels. Easy & Fast Booking."
            descTwo="Check Out Daily Deals and Promotion on hotels. Easy & Fast Booking."
            firstNam="Martina"
            lastNam="James Junior"
            num="01"
            insta={"/"}
            fb={"/"}
            Twitter={"/"}
            infoOne="About"
            infoTwo="Journey"
          />
          <GuidesCard
            img={John}
            title="Adventure Guru"
            descOne="Check Out Daily Deals and Promotion on hotels. Easy & Fast Booking."
            descTwo="Check Out Daily Deals and Promotion on hotels. Easy & Fast Booking."
            firstNam="John"
            lastNam="Deo"
            num="02"
            insta={"/"}
            fb={"/"}
            Twitter={"/"}
            infoOne="About"
            infoTwo="Journey"
          />
        </Slider>
      </Container>
    </section>
  );
};

export default TourGuides;
