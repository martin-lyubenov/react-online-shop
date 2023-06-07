import { NavLink } from "react-router-dom";

import classes from "./MainNav.module.css";

function MainNav(params) {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes["nav-list"]}>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? `${classes.active} ${classes["nav-link"]}`
                  : classes["nav-link"]
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/my-products"}
              className={({ isActive }) =>
                isActive
                  ? `${classes.active} ${classes["nav-link"]}`
                  : classes["nav-link"]
              }
              end
            >
              My Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/all-products"}
              className={({ isActive }) =>
                isActive
                  ? `${classes.active} ${classes["nav-link"]}`
                  : classes["nav-link"]
              }
            >
              All Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/auth"}
              className={({ isActive }) =>
                isActive
                  ? `${classes.active} ${classes["nav-link"]}`
                  : classes["nav-link"]
              }
            >
              Authentication
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to={"/login"}
              className={({ isActive }) =>
                isActive
                  ? `${classes.active} ${classes["nav-link"]}`
                  : classes["nav-link"]
              }
            >
              Login
            </NavLink>
          </li> */}
          <li>
            <NavLink to={"/"} className={classes["nav-link"]}>
              Logout
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to={"/register"}
              className={({ isActive }) =>
                isActive
                  ? `${classes.active} ${classes["nav-link"]}`
                  : classes["nav-link"]
              }
            >
              Register
            </NavLink>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default MainNav;
