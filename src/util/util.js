const itemName = "userData";

export function getUserData() {
  return JSON.parse(localStorage.getItem(itemName));
}


