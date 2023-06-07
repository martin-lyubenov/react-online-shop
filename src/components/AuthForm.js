import { Link, useSearchParams } from "react-router-dom";
import classes from "./AuthForm.module.css";

function AuthForm(params) {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";

  const message = !isLogin ? (
    <p className={classes.message}>
      Already registered?{" "}
      <Link to={`?mode=${isLogin ? "register" : "login"}`}>Login</Link>
    </p>
  ) : (
    <p className={classes.message}>
      Not registered?{" "}
      <Link to={`?mode=${!isLogin ? "login" : "register"}`}>
        Create an account
      </Link>
    </p>
  );

  return (
    <section>
      <div className={classes.form}>
        <h2>{isLogin ? "Login" : "Register"}</h2>
        <form>
          <input type="text" name="email" placeholder="email" />
          <input
            type="password"
            name="password"
            id="register-password"
            placeholder="password"
          />
          {!isLogin && (
            <input
              type="password"
              name="re-password"
              id="repeat-password"
              placeholder="repeat password"
            />
          )}
          <button type="submit">{isLogin ? "Login" : "Register"}</button>
          {message}
        </form>
      </div>
    </section>
  );
}

export default AuthForm;
