import "../Heading/Heading.css";

export const Heading = ({ children, size, weight }) => {
  const sizeClass = `heading-${size}`;
  const weightClass = `heading-weight-${weight}`;

  return <h1 className={`${sizeClass} ${weightClass}`}>{children}</h1>;
};
