"use strict";

/*
 * ==================
 *   START OF HW-12
 * ==================
 *
 * HERE IS NO MARKUP.
 *
 *
 */

/* TASK 1 & 2 */
// 1
const user = {
  name: "Matvej",
  hobby: "gaming",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

console.log(user);

const userKeys = Object.keys(user);

for (let key of userKeys) {
  console.log(`${key}:${user[key]}`);
}

// 2
const countProps = (obj) => {
  const keys = Object.keys(obj);

  return keys.length;
};

console.log(countProps(user)); // O: 4

/* TASK 3 */
const findBestEmployee = (employees) => {
  let bestEmployeeName = "";
  let maxTasks = 0;

  const keys = Object.keys(employees);
  for (const name of keys) {
    if (employees[name] > maxTasks) {
      maxTasks = employees[name];
      bestEmployeeName = name;
    }
  }

  return bestEmployeeName;
};

console.log(findBestEmployee({ mango: 3, poly: 10, ajax: 14, helen: 2 })); // O: ajax

/* TASK 4 */
const countTotalSalary = (employees) => {
  let values = Object.values(employees);
  let total = 0;

  for (const value of values) {
    total += value;
  }

  return total;
};

console.log(
  countTotalSalary({ mango: 30000, poly: 100000, ajax: 140000, helen: 20000 }),
); // O: 290000

/* TASK 5 & 6 */
// 5
const getAllPropValues = (arr, prop) => {
  const values = [];

  for (const item of arr) {
    if (item[prop] !== undefined) {
      values.push(item[prop]);
    }
  }

  return values;
};

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроїд", price: 400, quantity: 7 },
  { name: "Захоплення", price: 1200, quantity: 2 },
];

console.log(getAllPropValues(products, "name"));
console.log(getAllPropValues(products, "price"));
console.log(getAllPropValues(products, "quantity"));

// 6
const calculateTotalPrice = (allProducts, productName) => {
  let totalPrice = 0;

  for (const product of allProducts) {
    if (product.name === productName) {
      totalPrice = product.price * product.quantity;
      break;
    }
  }

  return totalPrice;
};
console.log(calculateTotalPrice(products, "Радар")); // O: 5200
console.log(calculateTotalPrice(products, "Сканер")); // O: 8100
console.log(calculateTotalPrice(products, "Дроїд")); // O: 2800
console.log(calculateTotalPrice(products, "Захоплення")); // O:2400
console.log(calculateTotalPrice(products, "Меч")); // O: 0

/*
 * ================
 *   END OF HW-12
 * ================
 */
