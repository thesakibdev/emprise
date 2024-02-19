import { FaAngleLeft } from "react-icons/fa6";

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
    className={`${className} border border-SlateGray  rounded-full cursor-pointer h-[60px] w-[60px] flex items-center justify-center text-SlateGray hover:shadow-md hover:border-BrandOne hover:bg-BrandOne hover:text-white absolute -top-[35px] right-16`}
    onClick={onClick}
    >
      <FaAngleLeft />
    </div>
  );
};

export default PrevArrow;
