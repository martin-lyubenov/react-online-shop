import { json, redirect } from "react-router-dom";
import CreateUpdateForm from "../components/Forms/CreateUpdateForm";
import { get, put } from "../data/api";
import { endpoints } from "../util/endpoints";
import { formActions } from "../util/fromActions";

function EditPage(params) {
  return <CreateUpdateForm method={"PUT"} />;
}

export async function action({ request, params }) {
  const productId = params.productId;
  const url = `${endpoints.products}/${productId}`;
  try {
    await formActions(request, put, url);
    return redirect("/products");
  } catch (error) {
    throw json({ message: error.error }, { status: error.code });
  }
}

export async function loader({ params }) {
  const productId = params.productId;

  const response = await get(endpoints.byProductId(productId));

  const data = await response.json();
  const product = data.results[0];

  return product;
}

export default EditPage;
