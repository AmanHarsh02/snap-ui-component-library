import "../Badge/Badge.css";

export const Badge = ({ size, text, status }) => {
  const badgeSizeClass = `badge-${size}`;
  const badgeStatusClass = `badge-${status}`;

  return (
    <span className={`badge ${badgeSizeClass} ${badgeStatusClass}`}>
      {text}
    </span>
  );
};
