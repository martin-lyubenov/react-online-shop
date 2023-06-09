import { json, redirect } from "react-router-dom";
import AuthForm from "../components/Forms/AuthForm";
import { post } from "../data/api";
import { setUserData } from "../util/util";
import { endpoints } from "../util/endpoints";

function AuthenticationPage(params) {
  return <AuthForm />;
}

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";

  // throwing an error if the user has managed to change the mode manually
  if (mode !== "login" && mode !== "register") {
    throw json({ message: "Unsupported mode." }, { status: 422 });
  }

  // extracting data from the Create Form and trimming the date to avoid any unwanted spaces
  const formData = await request.formData();
  const { email, password, rePassword } = Object.fromEntries(
    [...formData].map(([k, v]) => [k, v.trim()])
  );

  let response;

  // checking if the passwords match. If not returning an object which is handled by the AuthForm
  if (rePassword !== undefined && password !== rePassword) {
    const passwordsMatch = { passwordsMatch: false };
    return passwordsMatch;
  }

  if (mode === "login") {
    response = await post(endpoints.login, {
      username: email,
      password,
    });
  } else {
    response = await post(endpoints.register, {
      username: email,
      password,
    });
  }

  // checking if the user exists. If not returning an object which is handled by the AuthForm
  if (response.status === 404) {
    const passUserMatch = { passUserMatch: false };
    return passUserMatch;
  }

  if (response.ok === false) {
    const error = await response.json();
    throw json({ message: error.error }, { status: error.code });
  }

  const result = await response.json();

  // storing the logged in user details (needed for the authorized session) in the local storage 
  setUserData({
    email,
    objectId: result.objectId,
    sessionToken: result.sessionToken,
  });

  return redirect("/");
}

export default AuthenticationPage;
