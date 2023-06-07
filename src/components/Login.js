
import { Link } from 'react-router-dom';
import classes from './Login.module.css'

function Login(params) {
  return (
    <section >
      <div className={classes.form}>
        <h2>Login</h2>
        <form >
          <input type="text" name="email" id="email" placeholder="email" />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
          <button type="submit">login</button>
          <p className={classes.message} >
            Not registered? <Link to="/register">Create an account</Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Login;
