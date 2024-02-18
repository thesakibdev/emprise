import Flex from "../../Flex";
import CircleDownArrow from "../../../icon/CircleDownArrow";
import { FaSearch } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import CalenderIcon from "../../../icon/CalenderIcon";

const Search = ({ className }) => {
  return (
    <section className="">
      <div
        className={`w-4/5 bg-white rounded-[16px] py-[32px] px-[63px] mx-auto ${className}`}
      >
        <Flex className="justify-between items-center">
          <div className="">
            <label className="text-[28px] text-StatGray font-bold relative ">Location <span className="before:absolute before:w-full before:h-2 before:bottom-0 before:left-0 before:bg-BrandTwo"></span></label>
            <Flex className="gap-4 items-center mt-1">
              <input
                type="text"
                className="focus:outline-none border-black border-b placeholder:text-[18px]"
                placeholder="Enter your destination"
              />
              <IoLocationOutline className="text-[18px]" />
            </Flex>
          </div>

          <div className="">
            <label className="text-[28px] text-StatGray font-bold relative">Activity <span className="before:absolute before:w-full before:h-2 before:bottom-0 before:left-0 before:bg-BrandTwo"></span></label>
            <Flex className="gap-4 items-center">
              <input
                type="text"
                className="focus:outline-none border-black border-b inline-block placeholder:text-[18px]"
                placeholder="Bungee jump"
              />
              <CircleDownArrow />
            </Flex>
          </div>

          <div className="">
            <label className="text-[28px] text-StatGray font-bold relative">Date <span className="before:absolute before:w-full before:h-2 before:bottom-0 before:left-0 before:bg-BrandTwo"></span></label>
            <Flex className="gap-4 items-center">
              <input
                type="text"
                className="focus:outline-none border-black border-b inline-block placeholder:text-[18px]"
                placeholder="Set Date"
              />
              <CalenderIcon />
            </Flex>
          </div>

          <div className="text-white bg-BrandOne rounded-[16px] text-center p-10 cursor-pointer">
            <FaSearch className="text-[32px]" />
          </div>
        </Flex>
      </div>
    </section>
  );
};

export default Search;
