import { json } from "react-router-dom";
import Products from "../components/Products/Products";
import { get } from "../data/api";
import { endpoints } from "../util/endpoints";

function AllProductsPage(params) {
  return (
    <>
      <Products />
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

export default AllProductsPage;
