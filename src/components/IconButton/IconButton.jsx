import "../IconButton/IconButton.css";

export const IconButton = ({ icon, textColor, text, onClick }) => {
  return (
    <button
      className={`icon-button`}
      onClick={onClick}
      style={{ color: textColor }}
    >
      {icon}
      {text}
    </button>
  );
};
