import { useLoaderData } from "react-router-dom";

import classes from "./AllFruits.module.css";
import FruitCard from "./FruitCard";

function AllFruits(params) {
  const data = useLoaderData();
  const allFruits = data.results;

  const content =
    allFruits && allFruits.length > 0 ? (
      allFruits.map((fruit) => <FruitCard fruit={fruit} />)
    ) : (
      <p className={classes.heading}>No fruits yet</p>
    );

  return (
    <section>
      <h1 className={classes.heading}>All Products</h1>
      <article className={classes.container}>{content}</article>
    </section>
  );
}

//  ?where={"imageUrl": "A string", "name": "A string", "nutrition": "A string", "description": "A string" }

export default AllFruits;
