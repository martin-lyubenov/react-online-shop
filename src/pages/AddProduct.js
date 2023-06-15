import { json, redirect } from "react-router-dom";
import CreateUpdateForm from "../components/Forms/CreateUpdateForm";
import { post } from "../data/api";
import { endpoints } from "../util/endpoints";
import { formActions } from "../util/fromActions";

function AddProductPage(params) {
  return <CreateUpdateForm method={"POST"} />;
}

export async function action({ request }) {
  
  const url = endpoints.products;
  try {
    await formActions(request, post, url);
    return redirect("/products");
  } catch (error) {
    throw json({ message: error.error }, { status: error.code });
  }
}

export default AddProductPage;
