import { itemsActions } from "../../store/item";
import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
  const { name, nutrition, price, objectId, qty } = item;
  const processedPrice = Number(price).toFixed(2)

  const dispatch = useDispatch();
  const increaseHandler = () => {
    dispatch(itemsActions.increaseQty({ name, nutrition, price, objectId }));
  };

  const decreaseHandler = () => {
    dispatch(itemsActions.decreaseQty({ name, nutrition, price, objectId }));
  };

  return (
    <li className={classes.item}>
      <header className={classes.header}>
        <h3 className={classes.heading}>{name}</h3>
        <div className={classes.price}>
          <span className={classes.itemprice}>${processedPrice}/item</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span className={classes['span-quantity']}>{qty}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreaseHandler} className={classes['btn-action']}>-</button>
          <button onClick={increaseHandler} className={classes['btn-action']}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
