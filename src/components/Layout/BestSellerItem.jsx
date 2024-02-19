import Image from "../Image";
import london from "../../assets/london.png";
import Badge from "../Badge";

const BestSellerItem = () => {
  return (
    <div className="relative w-[521px] overflow-hidden group">
      <Image src={london} alt={london} />
      <Badge value="30%" className="top-8 right-8" />
      <div className="overlay group-hover:block hidden bg-black/50">
        <h3 className="absolute top-[215px] left-8">10 days | 09 Night</h3>
      </div>
    </div>
  );
};

export default BestSellerItem;
