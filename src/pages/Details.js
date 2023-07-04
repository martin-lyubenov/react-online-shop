import { json } from "react-router-dom";
import Details from "../components/Products/Details";
import { get } from "../data/api";
import { endpoints } from "../util/endpoints";

function DetailsPage(params) {
  return <Details />;
}

export async function loader({ params }) {
  const productId = params.productId;

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

export default DetailsPage;
