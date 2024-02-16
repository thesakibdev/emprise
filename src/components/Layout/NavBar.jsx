// image
import Logo from "../../assets/Emprise.png";
import Image from "../Image";
import Container from "../Container";
import Flex from "../Flex";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
const NavBar = () => {
  return (
    <header className="bg-transparent fixed top-0 left-0 w-full z-50">
      <nav>
        <Container>
          <Flex className="justify-between items-center py-[30px]">
            {/* logo */}
            <div className="w-2/12 ">
              <div className="w-[165px]">
                <picture>
                <Image src={Logo} alt="Emprise" />
              </picture>
              </div>
            </div>
            {/* menu */}
            <div className="w-7/12">
              <ul>
                <Flex className="items-center">
                  <li className="text-white text-[20px] font-medium px-[33px]">
                    <Link to="/">Destination</Link>
                  </li>
                  <li className="text-white text-[20px] font-medium px-[33px]">
                    <Link to="/">Activities</Link>
                  </li>
                  <li className="text-white text-[20px] font-medium px-[33px]">
                    <Link to="/">Specials</Link>
                  </li>
                  <div className="">
                    <FaSearch className="text-white text-[20px]" />
                  </div>
                </Flex>
              </ul>
            </div>
            {/* login */}
            <div className="w-2/12">
              <Flex className="justify-end">
                <button className="group text-white py-1 px-[14px] rounded-[28px] hover:bg-white duration-700 transition-all ease-linear">
                  <Link className="font-normal text-[20px]  group-hover:text-OxfordBlue duration-500 transition-all ease-in-out">
                    Login
                  </Link>
                </button>
                <button className="group text-white py-1 px-[14px] rounded-[28px] hover:bg-white duration-700 transition-all ease-linear">
                  <Link className="font-normal text-[20px]  group-hover:text-OxfordBlue duration-500 transition-all ease-in-out">
                    Sign up
                  </Link>
                </button>
              </Flex>
            </div>
          </Flex>
        </Container>
      </nav>
    </header>
  );
};

export default NavBar;
