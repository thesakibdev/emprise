const RattingBadge = ({ className, value }) => {
  return (
    <div className={`absolute px-[15px] py-2 rounded-full text-base text-BrandOne bg-AquaWhite ${className}`}>
        <p>{value}</p>
    </div>
  )
}

export default RattingBadge