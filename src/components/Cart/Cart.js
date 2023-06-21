import { useSelector } from "react-redux";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { CSSTransition } from "react-transition-group";

const animationTiming = {
  enter: 400,
  exit: 400,
};

const Cart = ({ cartIsVisible }) => {
  const items = useSelector((state) => state.items);
  const processedPrice = Math.abs(items.totalCost).toFixed(2);
  const totalQty = items.totalQuantity;

  let content = <p>No items</p>;

  if (items.items.length > 0) {
    content = (
      <ul className={classes["item-list"]}>
        {items.items.map((item) => (
          <CartItem key={item.objectId} item={item} />
        ))}
      </ul>
    );
  }

  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={cartIsVisible}
      timeout={animationTiming}
      classNames={{
        enter: "",
        enterActive: classes.cartIsOpen,
        exit: "",
        exitActive: classes.cartIsClosed,
      }}
    >
      <div className={classes.cart}>
        <h2 className={classes.heading}>Your Shopping Cart</h2>
        {content}
        <div className={classes['total-details']}>
          <p className={classes.price}>Total price: ${processedPrice}</p>
          <p className={classes.quantity}>Total qty: {totalQty}</p>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Cart;
