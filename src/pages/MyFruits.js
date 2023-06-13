import { json } from "react-router-dom";
import MyFruits from "../components/Fruits/MyFruits";

import { get } from "../data/api";
import { endpoints } from "../util/endpoints";

function MyFruitsPage(params) {
  return <MyFruits />;
}


export async function loader(params) {
  const data = await get(endpoints.allFruits);

  // TODO check if the server can return a sorted response  
  // -data-urlencode 'order=likes' \
  // https://parseapi.back4app.com/classes/Post

  if (data.ok === false) {
    const error = await data.json();
    throw json(
      { message: error.error },
      { status: error.code }
    );
  }

  return data;
} 

export default MyFruitsPage;
