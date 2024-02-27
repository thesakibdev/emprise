import { FaRegEnvelope } from "react-icons/fa";
import Flex from "./Flex";
const ContactInput = ({className}) => {
  return (
    <div className={`shadow-InputShadow pl-5 ${className}`}>
      <Flex className="items-center gap-5 justify-between">
        <FaRegEnvelope className="text-CadetGray" />
        <input
          type="email"
          className="w-[65%] focus:outline-none border-none placeholder:text-CadetGray md:placeholder:text-lg placeholder:text-xs"
          placeholder="Enter your email"
        />
        <button type="submit" className="bg-BrandOne md:py-6 py-1 px-2 md:px-8 text-white md:text-lg text-[10px]">Send Now!</button>
      </Flex>
    </div>
  );
};

export default ContactInput;
