import "../Image/Image.css";

export const Image = ({ imageSrc, variant, size }) => {
  const variantClass = `image__${variant}`;
  const sizeClass = `image__${size}`;

  return <img src={imageSrc} className={`${variantClass} ${sizeClass}`} />;
};
