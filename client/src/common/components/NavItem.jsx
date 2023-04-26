import { NavLink } from "react-router-dom";

const NavItem = ({ to, children, onClick, smallScreen }) => {
  const isActive = ({ isActive }) => {
    return isActive ? "bg-red text-background" : "bg-transparent text-red";
  };

  const navStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: ".2rem",
    paddingTop: "2px",
    paddingBottom: "2px",
    paddingLeft: "10px",
    paddingRight: "10px",
    borderRadius: "10%",
  };
  return (
    <li
      className={`${
        smallScreen && "text-background"
      } text-base hover:text-red transition-all duration-200`}
    >
      <NavLink to={to} style={navStyle} onClick={onClick} className={isActive}>
        {children}
      </NavLink>
    </li>
  );
};

export default NavItem;
