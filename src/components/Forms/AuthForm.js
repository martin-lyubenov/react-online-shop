import { Form, Link, useActionData, useSearchParams } from "react-router-dom";
import classes from "./AuthForm.module.css";

function AuthForm(params) {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  const data = useActionData();

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
        <h2 className={classes.heading}>{isLogin ? "Login" : "Register"}</h2>
        {data !== undefined && data.passwordsMatch === false && (
          <p>Passwords do not match</p>
        )}
        {data !== undefined && data.passUserMatch === false && (
          <p>Password or username do not match</p>
        )}
        <Form method="post">
          <input type="text" name="email" placeholder="email" required />
          <input
            type="password"
            name="password"
            placeholder="password"
            required
          />
          {!isLogin && (
            <input
              type="password"
              name="rePassword"
              placeholder="repeat password"
            />
          )}
          <button type="submit">{isLogin ? "Login" : "Register"}</button>
          {message}
        </Form>
      </div>
    </section>
  );
}

export default AuthForm;
