import { json } from "react-router-dom";
import { clearUserData, getUserData } from "../util";

// info about the host, appId and apiKey saved
const host = "https://parseapi.back4app.com";
const appId = "69QPUT0iQyomfQd45MQGypaiGPmdQtpsSQRDIJzC";
const apiKey = "QLKxV9pssizMglLvBAjkRbwAb8gFYYMKmf20AUdI";

async function request(method, url, data) {
  const options = {
    method: method,
    headers: {
      "X-Parse-Application-Id": appId,
      "X-Parse-JavaScript-Key": apiKey,
    },
  };

  if (data) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(data);
  }

  // const userData = getUserData();
  // if (userData) {
  //   const token = userData.sessionToken;
  //   options.headers["X-Authorization"] = token;
  // }
  const response = await fetch(host + url, options);
  return response;
}

export const get = request.bind(null, "GET");

export const post = request.bind(null, "POST");

export const put = request.bind(null, "PUT");

export const del = request.bind(null, "DELETE");
