import "../FloatingActionButton/FloatingActionButton.css";
import "../Button/Button.css";

export const FloatingActionButton = ({
  children,
  type = "solid",
  variant = "primary",
  onClick,
}) => {
  const typeClass = `button-${type}`;
  const variantClass = `button-${variant}`;

  return (
    <div
      onClick={() => onClick && onClick()}
      className={`button action-button ${typeClass} ${variantClass}`}
    >
      {children}
    </div>
  );
};
