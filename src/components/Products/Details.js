import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { del } from "../../data/api";
import { endpoints } from "../../util/endpoints";

import classes from "./Details.module.css";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../../store/item";

function Details() {
  const navigate = useNavigate();
  const fruit = useLoaderData();
  const user = useSelector((state) => state.user.user);
  if (user) {
    fruit.isCreator = user.objectId === fruit.owner.objectId;
  }

  const dispatch = useDispatch();

  const addToCatHandler = () => {
    dispatch(itemsActions.addItem(fruit));
  };

  async function deleteAction() {
    const choise = window.confirm(
      "If you are reading this I hope you have a greate day :)"
    );

    if (choise) {
      await del(endpoints.deleteFruit + fruit.objectId);
      navigate("/all-fruits");
    }
  }

  return (
    <section>
      <div className={classes["details-wrapper"]}>
        <img
          className={classes["details-img"]}
          src={fruit.imageUrl}
          alt="example1"
        />
        <p className={classes["details-title"]}>{fruit.name}</p>
        <div className={classes["info-wrapper"]}>
          <div className={classes["details-description"]}>
            <p>{fruit.description}</p>
            <p className={classes["nutrition"]}>{fruit.nutrition}</p>
            <p className={classes["price"]}>{fruit.price}</p>
          </div>
          {user && <button onClick={addToCatHandler}>Add to Cart</button>}

          {fruit.isCreator === true && (
            <div className={classes["action-buttons"]}>
              <Link to={`/all-fruits/${fruit.objectId}/edit`}>Edit</Link>
              <button onClick={deleteAction}>Delete</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Details;
