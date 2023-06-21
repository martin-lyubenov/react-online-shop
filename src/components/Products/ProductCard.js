import { Link } from "react-router-dom";
import classes from "./ProductCard.module.css";

function ProductCard({ product }) {
  const formattedPrice = product.price.toFixed(2);
  const [mainPrice, afterDecimal] = formattedPrice.split(".");

  return (
    <article className={classes.card}>
      {product.freeShipping && (
        <div className={classes["free-shipping"]}>Free shipping</div>
      )}
        <img
          src={product.imageUrl}
          alt={product.name}
          className={classes.img}
        />
      <p className={classes.title}>{product.name}</p>
      <p className={classes.price}>
        $<span className={classes["main-price"]}>{mainPrice}</span>.
        {afterDecimal}
      </p>
      <Link className={classes.button} to={`/products/${product.objectId}`}>
        More Info
      </Link>
    </article>
  );
}

export default ProductCard;
