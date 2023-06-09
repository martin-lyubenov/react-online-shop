import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { del } from "../../data/api";
import { endpoints } from "../../util/endpoints";

import classes from "./Details.module.css";

function Details() {
  const fruit = useLoaderData();
  const navigate = useNavigate();

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
            <p className={classes["nutrition"]}>Nutrition</p>
            <p className={classes["details-nutrition"]}>{fruit.nutrition}</p>
          </div>

          {fruit.isCreator ? (
            <div className={classes["action-buttons"]}>
              <Link to={`/all-fruits/${fruit.objectId}/edit`}>Edit</Link>
              <button onClick={deleteAction}>Delete</button>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default Details;
