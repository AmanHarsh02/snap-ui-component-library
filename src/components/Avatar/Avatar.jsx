import React from "react";
import "./Avatar.css";
import "../../css/utility.css";

export const Avatar = ({ size, name, src, shadow }) => {
  const avatarSizeClass = `avatar-${size}`;
  const shadowClass = `shadow-${shadow}`;

  return (
    <div className={`avatar ${avatarSizeClass} ${shadowClass}`}>
      <img src={src} alt={name} />
    </div>
  );
};
