import React from "react";
import Image from "../../Image";
import CAT from "../../../assets/cat.png";
import Container from "../../Container";
import { Link } from "react-router-dom";

const CatBanner = () => {
  return (
    <section className="py-32">
      <Container>
        <div>
          <Link to="/">
            <Image src={CAT} alt="banner" />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default CatBanner;
