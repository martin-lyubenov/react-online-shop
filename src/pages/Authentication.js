import { json, redirect } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { get, post } from "../data/api";
import { setUserData } from "../util";

const endpoints = {
  login: "/login",
  register: "/users",
};

function AuthenticationPage(params) {
  return <AuthForm />;
}

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";

  if (mode !== "login" && mode !== "register") {
    throw json({ message: "Unsupported mode." }, { status: 422 });
  }

  const formData = await request.formData();

  const { email, password, rePassword } = Object.fromEntries(
    [...formData].map(([k, v]) => [k, v.trim()])
  );

  let response;

  if (rePassword !== undefined && password !== rePassword) {
    const passwordsMatch = { passwordsMatch: false };
    return passwordsMatch;
  }

  if (mode === "login") {
    response = await post(endpoints.login, {
      username: email,
      password,
    });
    console.log(response);
  } else {
    response = await post(endpoints.register, {
      username: email,
      password,
    });
  }

  if (response.status === 404) {
    const passUserMatch = { passUserMatch: false };
    return passUserMatch;
  }

  if (response.ok === false) {
    const error = await response.json();
    throw json({ message: error.error }, { status: error.code });
  }

  const result = await response.json();

  setUserData({
    email,
    objectId: result.objectId,
    sessionToken: result.sessionToken,
  });

  return redirect("/");
}

export default AuthenticationPage;
