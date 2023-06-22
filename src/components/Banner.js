import classes from "./Banner.module.css";

function Banner(params) {
  return (
    <div className={classes.banner}>
      <a href="https://github.com/martin-lyubenov/react-online-shop" target="_blank" className={classes['banner-text']}>Fork me on GitHub</a>
    </div>
  );
}

export default Banner;
