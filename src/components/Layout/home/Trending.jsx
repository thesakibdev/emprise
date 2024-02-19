import Container from "../../Container";
import Heading from "../../Heading";
import TrendItem from "../TrendItem";
const Trending = () => {
  
  return (
    <div>
      <Container>
        <Heading
          title="Trending 2021"
          className="text-[40px] text-StatGray mb-4"
        />
        <p className="text-SlateGray text-2xl">
          Sost Brilliant reasons Entrada should be your one-stop-shop!
        </p>
          <TrendItem /> 
      </Container>
    </div>
  );
};

export default Trending;
