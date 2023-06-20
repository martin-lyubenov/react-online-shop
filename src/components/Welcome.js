import { Link } from "react-router-dom";
import classes from "./Welcome.module.css";

function Welcome(params) {
  return (
    <section>
      <article className={classes["welcome-content"]}>
        <article className={classes["welcome-content-box"]}>
          <h1 className={classes["main-heading"]}>Casual Wear</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur
          </p>
          <Link to={"/products"} className={classes.btn}>
            Shop Now
          </Link>
        </article>
      </article>

      <h2 className={classes["secondary-heading"]}>
        Welcome to our clothing store
      </h2>
    </section>
  );
}

export default Welcome;
