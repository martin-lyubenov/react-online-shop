import { NavLink, useNavigate } from "react-router-dom";

import classes from "./MainNav.module.css";
import Cart from "./Cart/Cart";
import CartVisibilityButton from "./Cart/CartVisibilityButton";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../store/user";
import MobileMenuBtn from "../UI/MobileMenuBtn";
import { toggleVisibilityActions } from "../store/toggleVisibility";

function MainNav(params) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  const visibility = useSelector((state) => state.toggleVisibility);
  const cartIsVisible = visibility.cartIsVisible;
  const mobileMenuIsVisible = visibility.mobileMenuIsVisible;

  let navigationClasses = `${classes["nav-list"]} ${classes.close}`;

  if (mobileMenuIsVisible) {
    navigationClasses = `${classes["nav-list"]} ${classes.open}`;
  }

  function closeMobileMenu(params) {
    dispatch(toggleVisibilityActions.toggleMobileMenuVisibility());
  }

  function logout() {
    dispatch(userActions.clearUserData());
    return navigate("/");
  }

  return (
    <>
      <MobileMenuBtn />
      <header className={classes.header}>
        <nav className={classes.nav}>
          <ul className={navigationClasses}>
            <li>
              <NavLink
                onClick={closeMobileMenu}
                to="/"
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
                onClick={closeMobileMenu}
                to="/products"
                className={({ isActive }) =>
                  isActive
                    ? `${classes.active} ${classes["nav-link"]}`
                    : classes["nav-link"]
                }
                end
              >
                Products
              </NavLink>
            </li>
            {user && (
              <>
                <li>
                  <NavLink
                    onClick={closeMobileMenu}
                    to="/my-products"
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
                    onClick={closeMobileMenu}
                    to="/add-product"
                    className={({ isActive }) =>
                      isActive
                        ? `${classes.active} ${classes["nav-link"]}`
                        : classes["nav-link"]
                    }
                    end
                  >
                    Add Product
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
                  onClick={closeMobileMenu}
                  to="/auth?mode=login"
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

        <p className={`${classes["nav-link"]} ${classes.welcome}`}>
          Welcome {user ? user.email : "valued customer"}{" "}
        </p>
      </header>
      <CartVisibilityButton />
      {cartIsVisible && <Cart />}
    </>
  );
}

export default MainNav;

// TODO remove welcome message in small screen? or at all
