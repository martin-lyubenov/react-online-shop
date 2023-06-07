import { NavLink, redirect } from "react-router-dom";

import classes from "./MainNav.module.css";
import { clearUserData, getUserData } from "../util";
import { useState } from "react";

function MainNav(params) {
  const [user, setUser] = useState(getUserData());

  async function logout() {
    clearUserData();
    setUser(null);
    return redirect("/");
  }

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
          {user && (
            <>
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
                <NavLink onClick={logout} className={classes["nav-link"]}>
                  Logout
                </NavLink>
              </li>
            </>
          )}

          {!user && (
            <li>
              <NavLink
                to={"/auth?mode=login"}
                className={({ isActive }) =>
                  isActive
                    ? `${classes.active} ${classes["nav-link"]}`
                    : classes["nav-link"]
                }
              >
                Authentication
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNav;
