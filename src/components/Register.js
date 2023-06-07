import { Link } from "react-router-dom";
import classes from "./Register.module.css";

function Register(params) {
  return (
    <section>
      <div className={classes.form}>
        <h2>Register</h2>
        <form>
          <input
            type="text"
            name="email"
            id="register-email"
            placeholder="email"
          />
          <input
            type="password"
            name="password"
            id="register-password"
            placeholder="password"
          />
          <input
            type="password"
            name="re-password"
            id="repeat-password"
            placeholder="repeat password"
          />
          <button type="submit">register</button>
          <p className={classes.message}>
            Already registered? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Register;
