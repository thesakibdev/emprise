import { FaRegEnvelope } from "react-icons/fa";
import Flex from "./Flex";
const ContactInput = ({className}) => {
  return (
    <div className={`shadow-InputShadow pl-5 ${className}`}>
      <Flex className="items-center gap-5 justify-between">
        <FaRegEnvelope className="text-CadetGray" />
        <input
          type="email"
          className="w-[65%] focus:outline-none border-none placeholder:text-CadetGray placeholder:text-lg"
          placeholder="Enter your email"
        />
        <button type="submit" className="bg-BrandOne py-6 px-8 text-white text-lg">Send Now!</button>
      </Flex>
    </div>
  );
};

export default ContactInput;
