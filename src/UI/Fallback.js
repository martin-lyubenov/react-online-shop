import { ClipLoader } from "react-spinners";

import classes from "./Fallback.module.css";

function Fallback(params) {
  const override = {
    display: "block",
    margin: "0 auto",
  };

  return (
    <div className={classes.center}>
      <div className={[classes["spinner-holder"]]}>
        <ClipLoader
          color="white"
          cssOverride={override}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </div>
  );
}

export default Fallback;
