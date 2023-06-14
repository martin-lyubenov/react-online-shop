import { useLoaderData } from "react-router-dom";

import classes from "./AllFruits.module.css";
import FruitCard from "./FruitCard";
import SearchField from "../Search/SearchField";
import { useEffect, useState } from "react";

function AllFruits(params) {
  const data = useLoaderData();
  const allFruits = data.results;
  const [content, setContent] = useState();

  useEffect(() => {
    const tempContent =
      allFruits && allFruits.length > 0 ? (
        allFruits.map((fruit) => <FruitCard fruit={fruit} />)
      ) : (
        <p className={classes.heading}>No fruits yet</p>
      );

    setContent(tempContent);
  }, [allFruits]);

  function onSearchHandler(searchQueryResult) {
    const tempContent = searchQueryResult.map((fruit) => (
      <FruitCard fruit={fruit} />
    ));
    setContent(tempContent);
  }

  return (
    <section>
      <SearchField onSearch={onSearchHandler} searchList={allFruits} />
      <h1 className={classes.heading}>All Products</h1>
      <article className={classes.container}>{content}</article>
    </section>
  );
}

export default AllFruits;
