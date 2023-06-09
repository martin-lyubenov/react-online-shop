const itemName = "userData";

export function getUserData() {
  console.log('get user');
  return JSON.parse(localStorage.getItem(itemName));
}

export function setUserData(data) {
  return localStorage.setItem(itemName, JSON.stringify(data));
}

export function clearUserData() {
  console.log('clear user');

  localStorage.removeItem(itemName);
}
