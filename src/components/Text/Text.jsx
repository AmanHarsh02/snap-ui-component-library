import "../Text/Text.css";

export const Text = ({ children, size }) => {
  const sizeClass = `text-${size}`;

  return <p className={`${sizeClass} `}>{children}</p>;
};
