import "./Button.css";

export const Button = ({ type, text, onClick, disabled }) => {
  const buttonTypeClass = `button-${type}`;

  return (
    <button
      className={`button ${buttonTypeClass} ${
        disabled ? "button-disabled" : ""
      }`}
      onClick={() => !disabled && onClick()}
    >
      {text}
    </button>
  );
};
