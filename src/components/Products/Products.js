import classes from "./Products.module.css";
import SearchField from "../Search/SearchField";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function Products({products}) {
  // traks if you are looking at the regular or searched list of products
  const [content, setContent] = useState();

  // loads products at loading the component
  useEffect(() => {
    const tempContent =
      products && products.length > 0 ? (
        products.map((product) => <ProductCard product={product} />)
      ) : (
        <p className={classes.heading}>No products yet</p>
      );

    setContent(tempContent);
  }, [products]);

  function onSearchHandler(searchQueryResult) {
    const tempContent = searchQueryResult.map((product) => (
      <ProductCard product={product} />
    ));
    setContent(tempContent);
  }

  return (
    <section>
      <SearchField onSearch={onSearchHandler} searchList={products} />
      <div className={classes.container}>{content}</div>
    </section>
  );
}

export default Products;
