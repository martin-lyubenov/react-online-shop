import classes from "./MobileMenuBtn.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleVisibilityActions } from "../store/toggleVisibility";

function MobileMenuBtn() {
  const visibility = useSelector((state) => state.toggleVisibility);
  const cartIsVisible = visibility.cartIsVisible;
  const mobileMenuIsVisible = visibility.mobileMenuIsVisible;

  const dispatch = useDispatch();

  const mobileMenuBtnHandler = () => {
    dispatch(toggleVisibilityActions.toggleMobileMenuVisibility());

    // makes sure to close the cart if you try to open the mobile menu
    if (!mobileMenuIsVisible && cartIsVisible) {
      dispatch(toggleVisibilityActions.toggleCartVisibility());
    }
  };

  const btnSvg = !mobileMenuIsVisible ? (
    <div className={classes.icon}>
      <FontAwesomeIcon icon={faBars} size="2xl" />
    </div>
  ) : (
    <FontAwesomeIcon icon={faX} size="2xl" style={{ color: "#ffffff" }} />
  );

  return (
    <>
      {mobileMenuIsVisible && (
        <div onClick={mobileMenuBtnHandler} className={classes.backdrop} />
      )}
      <button onClick={mobileMenuBtnHandler} className={classes.btn}>
        {btnSvg}
      </button>
    </>
  );
}

export default MobileMenuBtn;
