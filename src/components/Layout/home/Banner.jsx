import Heading from "../../Heading";
import Container from "../../Container";
import Flex from "../../Flex";
import { Link } from "react-router-dom";
import CardIcon from "../../../icon/CardIcon";
import Search from "./Search";

const Banner = () => {
  return (
    <section>
      <div className="slider">
        <div className="bg-BannerOne pt-[156px] pb-[198px]">
          <Container>
            <Flex className="justify-around">
              <div className="w-9/12">
                <p className="text-white text-2xl font-medium">
                  {" "}
                  - The Himalayan Mountain Ranges
                </p>
                <Heading
                  title="Nepal Country"
                  className="text-9xl font-bold text-white py-[57px]"
                />
                <Flex className="justify-between">
                  <Flex className="flex-col w-[205px] text-white text-2xl font-medium">
                    <p>- 02*C Very Cold</p>
                  </Flex>
                  <Flex className="gap-4 w-[438px] items-center">
                    <CardIcon />
                    <div className="text-white w-[450px]">
                      <p className="text-2xl">
                        We Accept Payment Through All Cards & Banking
                      </p>
                      <Link to="/" className="underline font-bold text-xl">
                        Book Now!
                      </Link>
                    </div>
                  </Flex>
                </Flex>
              </div>
            </Flex>
            <Search className="mt-[58px]" />
          </Container>

          {/* out of container content */}
          <div className="w-2/12 float-right -mt-[319px]">
            <div className="relative">
              <Flex className="absolute -rotate-[90deg]  right-0">
                <Link to="/" className=" text-white ">
                  Linkedin /
                </Link>
                <Link to="/" className="text-white">
                  Linkedin /
                </Link>
                <Link to="/" className="text-white">
                  Linkedin{" "}
                </Link>
              </Flex>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Banner;
