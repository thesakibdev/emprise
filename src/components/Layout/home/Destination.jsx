import Container from "../../Container";
import Flex from "../../Flex";
import Heading from "../../Heading";

// Image
import vietnam from "../../../assets/vietnam.png";
import OldRain from "../../../assets/oldRain.png";
import Greece from "../../../assets/greece.png";
import London from "../../../assets/london.png";
import Amsterdam from "../../../assets/amsterdam.png";
import Paris from "../../../assets/paris.png";
import DestiCard from "../DestiCard";

const Destination = () => {
  return (
    <section className="pt-[140px] pb-10">
      <Container>
        <Heading
          title="Top Destinations"
          className="text-[40px] text-StatGray mb-4"
        />
        <p className="text-SlateGray text-2xl">
          Sost Brilliant reasons Entrada should be your one-stop-shop!
        </p>
        <div className="mt-16">
          <Flex className="justify-between">
            <div className="w-[376px]">
              <DestiCard
                src={vietnam}
                className="mb-8"
                alt="vietnam"
                value={3.5}
                title="Vietnam"
                cate="Waterfall"
              />
              <DestiCard
                src={OldRain}
                className="mb-8"
                alt="old rain"
                value="30%"
                title="Old Rain"
                cate="Waterfall"
              />
            </div>
            <div className="w-[512px]">
              <DestiCard
                src={Greece}
                alt="greece"
                value="3.5"
                title="Greece"
                cate="Waterfall"
              />
            </div>
            <div className="w-[648px]">
              <DestiCard
                src={London}
                className="mb-8"
                alt="london"
                value="30%"
                title="London"
                cate="Waterfall"
              />
              <Flex className="justify-between">
                <div className="w-[240px]">
                  <DestiCard
                    src={Amsterdam}
                    alt="Amsterdam"
                    value="30%"
                    title="Amsterdam"
                    cate="Waterfall"
                  />
                </div>
                <div className="w-[376px]">
                  <DestiCard
                    src={Paris}
                    alt="Paris"
                    value="30%"
                    title="Paris"
                    cate="Waterfall"
                  />
                </div>
              </Flex>
            </div>
          </Flex>
        </div>
      </Container>
    </section>
  );
};

export default Destination;
