import RattingBadge from "../Layout/RattingBadge";
import Heading from "../Heading";
const CateItem = ({ className, Activities, Icon, Title, Value }) => {
  return (
    <div
      className={`w-[376px] border-[2px] border-CadetGray shadow-md rounded pt-[113px] pl-[32px] pb-9 bg-GainsBoro/20 relative ${className}`}
    >
      <RattingBadge value={Value} className="top-8 right-8" />
      {Icon}
      <Heading
        title={Title}
        className="text-OxfordBlue font-medium text-2xl mb-6 mt-4"
      />
      <p className="text-base text-CadetGray">{Activities}</p>
    </div>
  );
};

export default CateItem;
