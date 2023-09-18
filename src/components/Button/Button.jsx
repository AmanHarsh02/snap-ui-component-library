import "../Button/Button.css";

export const Button = ({
  children,
  type = "solid",
  variant = "primary",
  onClick,
  disabled,
  href,
}) => {
  const buttonTypeClass = `button-${type}`;
  const buttonVariantClass = `button-${variant}`;

  const onClickHandler = () => {
    if (href) {
      window.open(href, "_blank");
    } else if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <button
      className={`button ${buttonTypeClass} ${buttonVariantClass} ${
        disabled ? "button-disabled" : ""
      }`}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
};
