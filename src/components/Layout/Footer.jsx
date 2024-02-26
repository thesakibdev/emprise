import { CiCirclePlus } from "react-icons/ci";
import { FaEarthAsia, FaArrowRightLong } from "react-icons/fa6";
import Container from "../Container";
import Flex from "../Flex";

const Footer = () => {
  return (
    <footer className="px-4 xl:px-0">
      <Container>
        {/* footer top */}
        <div className="border-b border-[#E9ECEF] pb-5 xl:pb-10">
          <Flex className="flex-col md:flex-row gap-3 justify-between">
            <div className="lg:w-[40%]">
              <Flex className="justify-between items-center gap-2">
                <div className="flex items-center gap-2">
                  <CiCirclePlus className="inline-flex text-[20px] md:text-base xl:text-[33px] text-OxfordBlue" />{" "}
                  <span className="text-xs text-OxfordBlue font-semibold md:text-base xl:text-2xl">
                    Quick Links
                  </span>
                </div>
                <p className="text-SlateGray text-xs md:text-base xl:text-2xl">
                  Explore more categories
                </p>
              </Flex>
            </div>

            <div className="lg:w-[40%]">
              <p className="text-sm md:text-base xl:text-2xl text-StatGray">
                0123-456-324-54<span className="mx-2">|</span>hello@entrada.com
              </p>
            </div>
          </Flex>
        </div>
        {/* footer top */}

        {/* footer top next */}
        <div className="border-b border-[#E9ECEF] py-6">
          <Flex className="flex-col gap-5 md:flex-row  justify-between">
            {/* left side */}
            <div className="md:w-1/2">
              <p className="text-BrandOne text-base lg:text-2xl">
                Get in touch
              </p>
              <h1 className="text-OxfordBlue font-semibold xl:text-[40px] text-2xl mt-3 lg:mt-6 pr-6 2xl:pr-[325px] md:leading-[2]">
                Adventures Calling You Guys!
              </h1>
            </div>
            {/* right side */}
            <div>
              <Flex className="gap-4 items-center">
                <div className="bg-BrandOne h-10 w-10 flex items-center justify-center rounded-full lg:h-20 lg:w-20">
                  <FaEarthAsia className="text-white lg:text-5xl text-2xl" />
                </div>
                <div>
                  <p className="lg:text-2xl mb-2">Our Offices</p>
                  <p className="font-medium lg:text-2xl">Nepal, USA, India</p>
                </div>
              </Flex>
              <div className="lg:mt-6 text-[20px] lg:text-[40px] flex ml-14 lg:ml-24 text-OxfordBlue">
                <FaArrowRightLong />
              </div>
            </div>
          </Flex>
        </div>
        {/* footer top next */}
      </Container>
    </footer>
  );
};

export default Footer;
