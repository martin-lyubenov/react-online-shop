import { useLoaderData } from "react-router-dom";
import FruitCard from "./ProductCard";

import classes from "./Products.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import SearchField from "../Search/SearchField";
import ProductCard from "./ProductCard";

function MyProducts(params) {
  const data = useLoaderData();
  const [content, setContent] = useState();
  const user = useSelector((state) => state.user.user);
  const products = data.results;
  const ownerId = user.objectId;
  const searchList = products.filter(
    (fruit) => fruit.owner.objectId === ownerId
  );

  useEffect(() => {
    const myProducts = products.filter(
      (fruit) => fruit.owner.objectId === ownerId
    );
    const tempContent =
      myProducts && myProducts.length > 0 ? (
        myProducts.map((product) => <ProductCard product={product} />)
      ) : (
        <p className={classes.heading}>No products yet</p>
      );

    setContent(tempContent);
  }, [products, ownerId]);

  function onSearchHandler(searchQueryResult) {
    const tempContent = searchQueryResult.map((fruit) => (
      <FruitCard fruit={fruit} />
    ));
    setContent(tempContent);
  }

  return (
    <section>
      <SearchField onSearch={onSearchHandler} searchList={searchList} />
      <h1 className={classes["heading-main"]}>My Products</h1>
      <div className={classes.container}>{content}</div>
    </section>
  );
}

export default MyProducts;
