import Details from "../components/Products/Details";
import { get } from "../data/api";
import { endpoints } from "../util/endpoints";

function DetailsPage(params) {
  return <Details />;
}

export async function loader({ params }) {
  const productId = params.productId;

  // TODO add check for bad requests
  const response = await get(endpoints.byProductId(productId));

  const data = await response.json();
  const product = data.results[0];

  return product;
}

export default DetailsPage;
