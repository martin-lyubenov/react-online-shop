import { useSelector } from "react-redux";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  
  const items = useSelector((state) => state.items);
  const processedPrice = items.totalCost.toFixed(2);

  let content = <p>No items</p>;

  if (items.items.length > 0) {
    content = (
      <ul>
        {items.items.map((item) => <CartItem key={item.objectId} item={item} />)}
      </ul>
    );
  }

  return (
    <div className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {content}
      {processedPrice}
    </div>
  );
};

export default Cart;
