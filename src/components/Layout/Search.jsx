
import Flex from "../Flex";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <section>
        <div className="w-4/5 bg-white rounded-[16px] py-[50px] px-[63px]">
          <Flex>
            <div className="">
              <label htmlFor="">Location</label>
              <input type="search" className="focus:outline-none border-black placeholder:underline" placeholder="Enter your destination" /> <FaSearch/>
            </div>
          </Flex>
        </div>
    </section>
  );
};

export default Search;
