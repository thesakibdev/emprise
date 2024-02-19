import Badge from "../Badge";
import Image from "../Image";

const DestiCard = ({ className, src, alt, value, title, cate }) => {
  return (
    <div className={`relative ${className}`}>
      <Image src={src} alt={alt} />
      <Badge value={value} className="top-8 left-8" />
      <div className="absolute left-8 bottom-8 text-white">
        <h3 className="text-2xl font-medium">{title}</h3>
        <p className="text-base ">{cate}</p>
      </div>
    </div>
  );
};

export default DestiCard;
