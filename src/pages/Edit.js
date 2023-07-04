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

  // TODO add check for bad requests

  try {
    const response = await get(endpoints.byProductId(productId));

    if (response.ok === false) {
      const error = await response.json();
      throw json({ message: error.error }, { status: error.code });
    }

    const data = await response.json();

    const product = data.results[0];

    return product;
  } catch (error) {
    throw json({ message: error.error }, { status: error.code });
  }
}

export default EditPage;
