import "../IconButton/IconButton.css";
import "../Button/Button";

export const IconButton = ({
  children,
  icon,
  type = "solid",
  variant = "primary",
  onClick,
}) => {
  const typeStyle = `button-${type}`;
  const variantStyle = `button-${variant}`;

  return (
    <button
      className={`button icon-button ${typeStyle} ${variantStyle}`}
      onClick={() => onClick && onClick()}
    >
      {icon}
      {children}
    </button>
  );
};
