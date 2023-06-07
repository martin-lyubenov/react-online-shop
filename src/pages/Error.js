import { useRouteError } from "react-router-dom";
import MainNav from "../components/MainNav";

function ErrorPage(params) {
  const error = useRouteError();
  console.log(error);
  let message = error.data.message;

  return (
    <>
      <MainNav />
      <h1>{message}</h1>
    </>
  );
}

export default ErrorPage;
