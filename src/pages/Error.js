import { useRouteError } from "react-router-dom";
import MainNav from "../components/MainNav";
import store from "../store";
import { userActions } from "../store/userSlice";

function ErrorPage(params) {
  const error = useRouteError();
  let message = error.data.message;

  if (error.status === 404) {
    message = "Page not found";
  }

  if (error.status === 209) {
    store.dispatch(userActions.clearUserData());
  }

  // TODO Main nav does not update when there is an error??

  return (
    <>
      <MainNav />
      <h1>{message}</h1>
    </>
  );
}

export default ErrorPage;
