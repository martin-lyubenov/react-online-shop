import { json } from "react-router-dom";
import AllFruits from "../components/Fruits/AllFruits";
import { get } from "../data/api";
import { endpoints } from "../util/endpoints";

function AllFruitsPage(params) {
  return (
    <>
      <AllFruits />
    </>
  );
}

export async function loader(params) {
  const data = await get(endpoints.allFruits);

  if (data.ok === false) {
    const error = await data.json();
    throw json({ message: error.error }, { status: error.code });
  }

  return data;
}

export default AllFruitsPage;
