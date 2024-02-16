const Image = ({ src, alt, className }) => {
  return <img src={src} alt={alt} loading="lazy" decoding="async" className={`${className}`} />;
};

export default Image;
