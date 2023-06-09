import { useSelector } from "react-redux";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  
  const items = useSelector((state) => state.items.items);

  let content = <p>No items</p>;

  if (items.length > 0) {
    content = (
      <ul>
        {items.map((item) => <CartItem key={item.id} item={item} />)}
      </ul>
    );
  }

  return (
    <div className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {content}
    </div>
  );
};

export default Cart;
