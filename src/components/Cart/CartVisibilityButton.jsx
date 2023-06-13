import classes from "./CartVisibilityButton.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faX } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { cartToggleActions } from "../../store/cartToggle";

function CartVisibilityButton({ isShown }) {
  const dispatch = useDispatch();

  let itemsAmount = useSelector((state) => state.items.totalQuantity);

  const myCartHandler = () => {
    dispatch(cartToggleActions.toggleVisibility());
  };

  const btnSvg = !isShown ? (
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
    <button onClick={myCartHandler} className={classes.btn}>
      {btnSvg}
    </button>
  );
}

export default CartVisibilityButton;
