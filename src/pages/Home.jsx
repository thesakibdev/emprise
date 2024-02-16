import React from "react";
import Heading from "../components/Heading";
import Container from "../components/Container";
import Flex from "../components/Flex";
import { Link } from "react-router-dom";
import CardIcon from "../icon/CardIcon";
import Search from "../components/Layout/Search";

const Home = () => {
  return (
    <section className="">
      <div className="bg-BannerOne pt-[156px] pb-[198px]">
        <Container>
          <Flex className="justify-around">
            <div className="w-9/12">
              <p className="text-white"> - The Himalayan Mountain Ranges</p>
              <Heading title="Nepal Country" className="text-5xl text-white" />
              <div className="text-white flex justify-between">
                <p>- 02*C Very Cold</p>
                <Flex className="">
                  <CardIcon />
                  <div className="text-white">
                    <p>We Accept Payment Through All Cards & Banking</p>
                    <Link to="/" className="underline">
                      Book Now!
                    </Link>
                  </div>
                </Flex>
              </div>
            </div>
          </Flex>
          <Search/>
        </Container>
        <div className="w-2/12 float-right">
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
    </section>
  );
};

export default Home;
