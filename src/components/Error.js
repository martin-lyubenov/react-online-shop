
import classes from "./Error.module.css"

function Error({ message }) {
  return (
    <>
      <h1 className={classes.heading}>{message}</h1>
      <img
            src="https://tenor.com/view/404-not-found-error-20th-century-fox-gif-24907780.gif"
            alt="error img"
            className={classes.img}
          />
          
    </>
  );
}

export default Error;
