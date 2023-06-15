import { Link } from "react-router-dom";
import classes from "./ProductCard.module.css";

function ProductCard({ name, imageUrl, freeShipping, price, objectId }) {
  const formattedPrice = price.toFixed(2);
  const [mainPrice, afterDecimal] = formattedPrice.split(".");

  return (
    <article className={classes.card}>
      {freeShipping && (
        <div className={classes["free-shipping"]}>Free shipping</div>
      )}
      <img src={imageUrl} alt={name} className={classes.img} />
      <p className={classes.title}>{name}</p>
      <p className={classes.price}>
        $<span className={classes["main-price"]}>{mainPrice}</span>.
        {afterDecimal}
      </p>
      <Link className={classes.button} to={`/all-fruits/${objectId}`}>
        More Info
      </Link>
    </article>
  );
}

export default ProductCard;



// TODO, remove if not needed
{/* <div className={classes.fruit}>
  <img src={fruit.imageUrl} alt="example1" />

  <h3 className={classes.title}>{fruit.name}</h3>
  <p class="description">{fruit.description}</p>
  <p class="price">{fruit.price}</p>
  <Link className={classes["details-btn"]} to={`/all-fruits/${fruit.objectId}`}>
    More Info
  </Link>
</div>; */}
