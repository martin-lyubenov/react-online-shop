import { Await, defer, json, useLoaderData } from "react-router-dom";
import MyProducts from "../components/Products/MyProducts";

import classes from "./AllProducts.module.css";

import { get } from "../data/api";
import { endpoints } from "../util/endpoints";
import { Suspense } from "react";
import Fallback from "../UI/Fallback";

function MyProductsPage(params) {
  const { data } = useLoaderData();

  return (
    <>
      <h1 className={classes["heading-main"]}>My Products</h1>
      <Suspense fallback={<Fallback />}>
        <Await resolve={data}>
          {(data) => <MyProducts products={data.results} />}
        </Await>
      </Suspense>
    </>
  );
}

async function getProducts(params) {
  const data = await get(endpoints.products);

  if (data.ok === false) {
    const error = await data.json();
    throw json({ message: error.error }, { status: error.code });
  }

  const result = data.json();

  return result;
}

export function loader(params) {
  return defer({
    data: getProducts(),
  });
}

export default MyProductsPage;
