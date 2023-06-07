// import { clearUserData, getUserData } from "../util.js";

const host = "https://react-shop-fde02-default-rtdb.europe-west1.firebasedatabase.app/";

async function request(method, url, data) {
  const options = {
    method: method,
    headers: {},
  };

  if (data) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(data);
  }

  // const userData = getUserData();
  // if (userData) {
  //     const token = userData.accessToken;
  //     options.headers['X-Authorization'] = token
  // }

  try {
    const response = await fetch(host + url, options);

    let result;

    if (response.status != 204) {
      result = await response.json();
    }

    if (response.ok === false) {
      // if (response.status === 403) {
      //     clearUserData();
      // }
      const error = result;
      throw error;
    }

    return result;
  } catch (error) {
    alert(error.message);
    throw error;
  }
}

export const get = request.bind(null, "GET");

export const post = request.bind(null, "POST");

export const put = request.bind(null, "PUT");

export const del = request.bind(null, "DELETE");
