import { json, redirect } from "react-router-dom";
import CreateForm from "../components/Forms/CreateForm";
import { post } from "../data/api";
import { endpoints } from "../util/endpoints";
import { getUserData } from "../util/util";

function AddFruitPage(params) {
  return <CreateForm />;
}

export async function action({ request }) {
  const formData = await request.formData();

  // extracting data from the Create Form and trimming the date to avoid any unwanted spaces
  const { name, imageUrl, description, nutrition } = Object.fromEntries(
    [...formData].map(([k, v]) => [k, v.trim()])
  );

  const userData = getUserData();
  const owner = {
    __type: "Pointer",
    className: "_User",
    objectId: userData.objectId,
  };

  const response = await post(endpoints.allFruits, {
    name,
    imageUrl,
    description,
    nutrition,
    owner,
  });

  if (response.ok === false) {
    const error = await response.json();
    throw json({ message: error.error }, { status: error.code });
  }

  // result is not needed but kept just in case, line can be removed
  const result = await response.json();

  return redirect("/all-fruits");
}

export default AddFruitPage;
