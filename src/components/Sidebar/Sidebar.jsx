import "../Sidebar/Sidebar.css";
import { useNavigate } from "react-router-dom";
import { componentList } from "../../data/componentList";

export const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <aside className="sidebar">
      {componentList.map((comp) => {
        return (
          <p key={comp} onClick={() => navigate(`/${comp}`)}>
            {comp}
          </p>
        );
      })}
    </aside>
  );
};
