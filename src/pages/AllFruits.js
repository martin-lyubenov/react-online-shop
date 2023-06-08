import { json } from "react-router-dom";
import AllFruits from "../components/AllFruits";
import { get } from "../data/api";
import { endpoints } from "../util/endpoints";

function AllFruitsPage(params) {
  return <AllFruits />;
}

export async function loader(params) {
  try {
    const data = await get(endpoints.allFruits);

    return data;
  } catch (error) {
    throw json(
      { message: "Something went wrong, please reload the page" },
      { status: 500 }
    );
  }
}

export default AllFruitsPage;
