import "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="navbar">
      <NavLink to="/" class="navlink">
        Landing
      </NavLink>
      <NavLink to="/home" class="navlink">
        Home
      </NavLink>
      <NavLink to="/create" class="navlink">
        Create activity
      </NavLink>
    </div>
  );
};

export default Navbar;
