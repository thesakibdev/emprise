import Image from "../Image";
import Badge from "../Badge";
import { IoShareSocial } from "react-icons/io5";
import { Link } from "react-router-dom";
import Flex from "../Flex";

const BestSellerItem = ({ value, src, alt, title, offer, price, desc }) => {
  return (
    <div className="w-[521px] overflow-hidden group rounded-[25px]">
      {/* img and overlay */}
      <div className="relative overflow-hidden h-[346px]">
        <Badge value={value} className="top-8 right-8" />
        <Image src={src} alt={alt} className="h-full" />
        <div className="w-full h-full absolute bottom-[-100%] bg-hoverEffect text-white group-hover:bottom-0 duration-500">
          <h3 className=" absolute left-8 bottom-[104px]">
            {offer}
          </h3>
          {/* price */}
          <div className="absolute bottom-8">
            <p className="relative inline-block pl-8 text-[32px] font-semibold">
              ${price}
              <span className="before:absolute before:bg-white before:w-[80%] before:h-[4px] before:top-[100%] before:left-8"></span>
            </p>
          </div>
          {/* share and explore */}
          <div className="absolute bottom-8 right-8">
            <Flex className={"items-center gap-2"}>
              <Link className="h-12 w-12 rounded-full bg-white flex items-center text-OxfordBlue justify-center text-[13px]">
                <IoShareSocial />
              </Link>
              <Link className="py-4 px-8 bg-BrandOne rounded-full">
                Explore
              </Link>
            </Flex>
          </div>
        </div>
      </div>

      <div className=" text-center pt-7">
        {/* title */}
        <h3 className="mb-4 text-OxfordBlue text-2xl font-medium">
          {title}
        </h3>
        <p className="text-CadetGray">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default BestSellerItem;
