import { NavLink, redirect, useLoaderData } from "react-router-dom";

import classes from "./MainNav.module.css";
import { clearUserData } from "../util/util";

function MainNav(params) {
  const user = useLoaderData("root");

  async function logout() {
    clearUserData();
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
              to={"/all-fruits"}
              className={({ isActive }) =>
                isActive
                  ? `${classes.active} ${classes["nav-link"]}`
                  : classes["nav-link"]
              }
            >
              All Fruits
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
                <NavLink
                  to={"/add-fruit"}
                  className={({ isActive }) =>
                    isActive
                      ? `${classes.active} ${classes["nav-link"]}`
                      : classes["nav-link"]
                  }
                  end
                >
                  Add fruit
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
          {user && (
            <li>
              <p className={classes["nav-link"]}>Welcome {user.email}</p>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNav;
