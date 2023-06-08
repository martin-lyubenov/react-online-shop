import { useLoaderData } from "react-router-dom";
import FruitCard from "./FruitCard";
import { getUserData } from "../../util/util";

import classes from "./MyFruits.module.css";

function MyFruits(params) {
  const data = useLoaderData();
  const ownerId = getUserData().objectId;
  const MyFruits = data.results.filter(
    (fruit) => fruit.owner.objectId === ownerId
  );

  const content =
    MyFruits && MyFruits.length > 0 ? (
      MyFruits.map((fruit) => <FruitCard fruit={fruit} />)
    ) : (
      <p className={classes.heading}>No fruits yet</p>
    );

  return (
    <section>
      <h1 className={classes.heading}>My Fruits</h1>
      <article className={classes.container}>{content}</article>
    </section>
  );
}

export default MyFruits;
