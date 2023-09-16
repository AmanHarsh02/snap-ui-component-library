import { AiOutlineCheckCircle } from "react-icons/ai";
import { BiErrorCircle } from "react-icons/bi";
import { AiOutlineWarning } from "react-icons/ai";
import { AiOutlineInfoCircle } from "react-icons/ai";
import "../Alert/Alert.css";

export const Alert = ({ children, status }) => {
  const getAlertData = (status) => {
    switch (status.toLowerCase()) {
      case "success":
        return {
          icon: <AiOutlineCheckCircle size={20} fill="green" />,
          class: "alert__success",
        };
      case "error":
        return {
          icon: <BiErrorCircle size={20} fill="#c31e24" />,
          class: "alert__error",
        };
      case "warn":
        return {
          icon: <AiOutlineWarning size={20} fill="#eaa221" />,
          class: "alert__warning",
        };
      case "info":
        return {
          icon: <AiOutlineInfoCircle size={20} fill="#0363af" />,
          class: "alert__info",
        };
      default:
        return null;
    }
  };

  const alertData = getAlertData(status);

  return (
    <div>
      <p className={`alert ${alertData?.class}`}>
        {alertData?.icon} {children}
      </p>
    </div>
  );
};
