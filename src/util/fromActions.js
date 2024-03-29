import { getUserData } from "./util";

// function that extract and returns 

export async function formActions(request, httpReq, url) {
  const formData = await request.formData();

  // extracting data from the Create Form and trimming the date to avoid any unwanted spaces
  const { name, imageUrl, description, price, shipping } = Object.fromEntries(
    [...formData].map(([k, v]) => [k, v.trim()])
  );

  const formatedPrice = Number(price);
  const freeShipping = shipping.toLowerCase().includes("free") ? true : false;

  const userData = getUserData();
  const owner = {
    __type: "Pointer",
    className: "_User",
    objectId: userData.objectId,
  };

  const response = await httpReq(url, {
    name,
    imageUrl,
    description,
    price: formatedPrice,
    freeShipping,
    owner,
  });

  if (response.ok === false) {
    const error = await response.json();
    throw error;
  }

  // result is not needed but kept just in case, line can be removed
  // const result = await response.json();
}
