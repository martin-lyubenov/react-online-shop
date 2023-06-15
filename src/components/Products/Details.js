import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { del } from "../../data/api";
import { endpoints } from "../../util/endpoints";

import classes from "./Details.module.css";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../../store/item";

function Details() {
  const navigate = useNavigate();
  const product = useLoaderData();
  const user = useSelector((state) => state.user.user);
  if (user) {
    product.isCreator = user.objectId === product.owner.objectId;
  }

  const dispatch = useDispatch();

  const addToCatHandler = () => {
    dispatch(itemsActions.addItem(product));
  };

  async function deleteAction() {
    const choise = window.confirm(
      "If you are reading this I hope you have a greate day :)"
    );

    if (choise) {
      await del(endpoints.deleteProduct + product.objectId);
      navigate("/products");
    }
  }

  return (
    <section className={classes["details-wrapper"]}>
      <img
        className={classes["details-img"]}
        src={product.imageUrl}
        alt={product.name}
      />
      <h2 className={classes["details-title"]}>{product.name}</h2>
      <div className={classes["info-wrapper"]}>
        <div className={classes["details-description"]}>
          <p>{product.description}</p>
          <p className={classes["price"]}>${product.price}</p>
        </div>
        {user && <button onClick={addToCatHandler} className={classes.button}>Add to Cart</button>}

        {product.isCreator === true && (
          <div className={classes["action-buttons"]}>
            <Link to={`/products/${product.objectId}/edit`} className={classes.edit} >Edit</Link>
            <button onClick={deleteAction} className={classes.danger} >Delete</button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Details;
