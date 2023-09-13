import "./Navbar.css";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <h2>
        <NavLink className="brand__text" to="/">
          SNAP-UI
        </NavLink>
      </h2>

      <div className="search__bar">
        <input type="text" placeholder="Search for components..." />
        <button className="search__btn">Search</button>
      </div>

      <div className="nav__pills">
        <NavLink to="/">Home</NavLink>

        <NavLink to="/components">Components</NavLink>

        <NavLink
          to="https://github.com/AmanHarsh02/snap-ui-component-library"
          target="blank"
        >
          GitHub
        </NavLink>
      </div>
    </nav>
  );
};
