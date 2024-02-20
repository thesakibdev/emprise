import React from "react";
import Flex from "../Flex";
import Image from "../Image";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa6";

const GuidesCard = ({ img, num, title, firstNam, lastNam, fb, insta, Twitter, infoOne, infoTwo, descOne, descTwo }) => {
  return (
    <div className="pt-16">
      <Flex>
        {/* image */}
        <div className="w-[32%]">
          <div className="h-[670px] w-[512px] relative rounded-[20px]">
            <Image alt="tour guides" src={img} className="h-full w-full" />
            <div className="w-[72px] h-[72px] flex items-center justify-center rounded-tr-[20px] bg-white text-OxfordBlue text-2xl absolute bottom-0 left-0">
              {num}
            </div>
          </div>
        </div>

        {/* info */}
        <div className="w-[68%] pt-10 pl-10">
          {/* title */}
          <h3 className="text-2xl text-BrandOne">{title}</h3>

          {/* name */}
          <h1 className="text-[40px] text-OxfordBlue font-medium mb-24 mt-6">
            {firstNam} <br /> {lastNam}
          </h1>

          {/* About */}
          <Flex>
            <div className="">
              <h3 className="text-2xl text-black mb-4">{infoOne}</h3>
              <p className="text-CadetGray">
                {descOne}
              </p>
            </div>
            <div className="">
              <h3 className="text-2xl text-black mb-4">{infoTwo}</h3>
              <p className="text-CadetGray">
              {descTwo}
              </p>
            </div>
          </Flex>

          {/* social media */}
          <Flex className="text-[18px] text-black gap-4 mt-40">
            <Link to={fb}>Facebook</Link>
            <Link to={insta}>Instagram</Link>
            <Link to={Twitter}>Twitter</Link>
          </Flex>
        </div>
      </Flex>
    </div>
  );
};

export default GuidesCard;
