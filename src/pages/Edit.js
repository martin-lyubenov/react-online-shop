import { json, redirect } from "react-router-dom";
import CreateUpdateForm from "../components/Forms/CreateUpdateForm";
import { get, put } from "../data/api";
import { endpoints } from "../util/endpoints";
import { formActions } from "../util/fromActions";

function EditPage(params) {
  return <CreateUpdateForm method={"PUT"} />;
}

export async function action({ request, params }) {
  const fruitId = params.fruitId;
  const url = `${endpoints.allFruits}/${fruitId}`;
  try {
    await formActions(request, put, url);
    return redirect("/all-fruits");
  } catch (error) {
    throw json({ message: error.error }, { status: error.code });
  }
}

export async function loader({ params }) {
  const fruitId = params.fruitId;

  const response = await get(endpoints.byFruitId(fruitId));

  const data = await response.json();
  const fruit = data.results[0];

  return fruit;
}

export default EditPage;
