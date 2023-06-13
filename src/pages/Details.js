import Details from "../components/Fruits/Details";
import { get } from "../data/api";
import { endpoints } from "../util/endpoints";

function DetailsPage(params) {
  return <Details />;
}

export async function loader({params}) {
  const fruitId = params.fruitId;

  // TODO add check for bad requests
  const response = await get(endpoints.byFruitId(fruitId));

  const data = await response.json();
  const fruit = data.results[0];

  return fruit;

}

export default DetailsPage;
