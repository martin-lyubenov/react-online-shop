import { getUserData } from "./util";

export async function formActions(request, httpReq, url) {
  const formData = await request.formData();

  // extracting data from the Create Form and trimming the date to avoid any unwanted spaces
  const { name, imageUrl, description, nutrition, price } = Object.fromEntries(
    [...formData].map(([k, v]) => [k, v.trim()])
  );

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
    nutrition,
    price,
    owner,
  });

  if (response.ok === false) {
    const error = await response.json();
    throw error;
  }

  // result is not needed but kept just in case, line can be removed
  // const result = await response.json();
}
