import { useLoaderData } from "react-router-dom";
import FruitCard from "./FruitCard";

import classes from "./MyFruits.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import SearchField from "../Search/SearchField";

function MyFruits(params) {
  const data = useLoaderData();
  const [content, setContent] = useState();
  const user = useSelector((state) => state.user.user);
  const allFruits = data.results;
  const ownerId = user.objectId;
  const searchList = allFruits.filter(
    (fruit) => fruit.owner.objectId === ownerId
  );

  useEffect(() => {
    const MyFruits = allFruits.filter(
      (fruit) => fruit.owner.objectId === ownerId
    );
    const tempContent =
      MyFruits && MyFruits.length > 0 ? (
        MyFruits.map((fruit) => <FruitCard fruit={fruit} />)
      ) : (
        <p className={classes.heading}>No fruits yet</p>
      );

    setContent(tempContent);
  }, [allFruits, user]);

  function onSearchHandler(searchQueryResult) {
    const tempContent = searchQueryResult.map((fruit) => (
      <FruitCard fruit={fruit} />
    ));
    setContent(tempContent);
  }

  return (
    <section>
      <SearchField onSearch={onSearchHandler} searchList={searchList} />
      <h1 className={classes.heading}>My Fruits</h1>
      <article className={classes.container}>{content}</article>
    </section>
  );
}

export default MyFruits;
