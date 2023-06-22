import { useRouteError } from "react-router-dom";
import MainNav from "../components/MainNav";
import store from "../store";
import { userActions } from "../store/user";
import MainContainer from "../UI/MainContainer";
import Error from "../components/Error";

function ErrorPage(params) {
  const error = useRouteError();
  console.log(error);
  let message = error.data.message;

  if (error.status === 404) {
    message = "Page not found";
  }

  if (error.status === 209) {
    store.dispatch(userActions.clearUserData());
  }

  return (
    <>
      <MainNav />
      <MainContainer>
        <Error message={message} />
      </MainContainer>
    </>
  );
}

export default ErrorPage;
