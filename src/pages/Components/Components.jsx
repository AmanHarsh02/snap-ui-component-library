import "../Components/Components.css";
import { componentList } from "../../data/componentList";
import { useNavigate } from "react-router";

export const Components = () => {
  const navigate = useNavigate();

  return (
    <section className="components__page">
      <h1>All Components</h1>

      <ul className="component__list">
        {componentList.map((component) => {
          return (
            <li
              className="component__list__item"
              key={component}
              onClick={() => navigate(`/${component.toLowerCase()}`)}
            >
              {component}
            </li>
          );
        })}
      </ul>
    </section>
  );
};
