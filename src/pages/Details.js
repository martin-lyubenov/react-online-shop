import Details from "../components/Fruits/Details";
import { get } from "../data/api";
import { endpoints } from "../util/endpoints";
import { getUserData } from "../util/util";

function DetailsPage(params) {
  return <Details />;
}

export async function loader({params}) {
  const fruitId = params.fruitId;
  const user = getUserData();

  const response = await get(endpoints.byFruitId(fruitId));

  const data = await response.json();
  const fruit = data.results[0];


  if (user) {
    fruit.isCreator = user.objectId === fruit.owner.objectId;
  }

  return fruit;

}

export default DetailsPage;
