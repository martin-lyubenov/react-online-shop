import classes from "./CartVisibilityButton.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faX } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleVisibilityActions } from "../../store/toggleVisibility";

function CartVisibilityButton() {
  const dispatch = useDispatch();
  const visibility = useSelector((state) => state.toggleVisibility);
  const cartIsVisible = visibility.cartIsVisible;
  const mobileMenuIsVisible = visibility.mobileMenuIsVisible;

  let itemsAmount = useSelector((state) => state.items.totalQuantity);

  const myCartHandler = () => {
    dispatch(toggleVisibilityActions.toggleCartVisibility());

    // makes sure to close the mobilemenu if you try to open the cart
    if (!cartIsVisible && mobileMenuIsVisible) {
      dispatch(toggleVisibilityActions.toggleMobileMenuVisibility());
    }
  };

  const btnSvg = !cartIsVisible ? (
    <div className={classes.icon}>
      <FontAwesomeIcon
        className={classes["shopping-cart"]}
        icon={faCartShopping}
      />{" "}
      <div className={classes["item-count"]}>{itemsAmount}</div>
    </div>
  ) : (
    <FontAwesomeIcon className={classes["shopping-cart"]} icon={faX} />
  );

  return (
    <>
      {cartIsVisible && (
        <div onClick={myCartHandler} className={classes.backdrop} />
      )}
      <button onClick={myCartHandler} className={classes.btn}>
        {btnSvg}
      </button>
    </>
  );
}

export default CartVisibilityButton;
