import { NavLink, useLoaderData, useNavigate } from "react-router-dom";

import classes from "./MainNav.module.css";
import { clearUserData } from "../util/util";
import Cart from "./Cart/Cart";
import CartVisibilityButton from "./Cart/CartVisibilityButton";
import { useSelector } from "react-redux";

function MainNav(params) {
  const user = useLoaderData("root");
  const navigate = useNavigate();
  const isShown = useSelector((state) => state.cartToggle.isShown);

  async function logout() {
    clearUserData();
    return navigate("/");
  }

  return (
    <>
      {" "}
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
                end
              >
                All Fruits
              </NavLink>
            </li>
            {user && (
              <>
                <li>
                  <NavLink
                    to={"/my-fruits"}
                    className={({ isActive }) =>
                      isActive
                        ? `${classes.active} ${classes["nav-link"]}`
                        : classes["nav-link"]
                    }
                    end
                  >
                    My Fruits
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
      <CartVisibilityButton isShown={isShown} />
      {isShown && <Cart />}
    </>
  );
}

export default MainNav;
