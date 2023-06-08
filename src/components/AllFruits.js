import { Link, useLoaderData } from "react-router-dom";

import classes from "./AllFruits.module.css";

const FruitCard = ({ fruit }) => {
  return (
    <div className={classes.fruit}>

        <img src={fruit.imageUrl} alt="example1" />


      <h3 className={classes.title}>{fruit.name}</h3>
      <p class="description">{fruit.description}</p>
      <Link
        className={classes["details-btn"]}
        to={`/all-fruits/${fruit.objectId}`}
      >
        More Info
      </Link>
    </div>
  );
};

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
      <article className={classes.container}>
      {content}
      </article>
    </section>
  );
}

export default AllFruits;
