import Container from "../../Container";
import Heading from "../../Heading";
import CateItem from "../CateItem";
import BeachIcon from "../../../icon/BeachIcon";
import Flex from "../../Flex";

const SelectCate = () => {
  return (
    <section className="py-[136px]">
      <Container>
        <Heading
          title="Select Category"
          className="text-[40px] text-StatGray mb-4"
        />
        <p className="text-SlateGray text-2xl">
          Sost Brilliant reasons Entrada should be your one-stop-shop!
        </p>
        <Flex className="justify-between">
          <CateItem
            className="mt-16"
            Title="Beach Activity"
            Value={4.9}
            Activities="196 Activities"
            Icon={<BeachIcon />}
          />
          <CateItem
            className="mt-16"
            Title="Beach Activity"
            Value={4.9}
            Activities="196 Activities"
            Icon={<BeachIcon />}
          />
          <CateItem
            className="mt-16"
            Title="Beach Activity"
            Value={4.9}
            Activities="196 Activities"
            Icon={<BeachIcon />}
          />
          <CateItem
            className="mt-16"
            Title="Beach Activity"
            Value={4.9}
            Activities="196 Activities"
            Icon={<BeachIcon />}
          />
        </Flex>
      </Container>
    </section>
  );
};

export default SelectCate;
