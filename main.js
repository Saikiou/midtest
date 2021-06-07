"strict mode";

import employeeList from "./data/employeeList.js";

const reverseString = (str) => {
  return str === "" ? "" : reverseString(str.substr(1)) + str.charAt(0);
};
const capitalizeFirstLetter = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
    .join(" ");
};
let arr = ["one", "one", 1, 1, "two", "two", 2, 2];
const removeDuplicate = arr.filter(
  (value, index, array) => array.indexOf(value) === index
);
let dateArray = [2012, 6, 5];
let dateObject = new Date(...dateArray);
let isValidDate = Date.parse(dateObject);
if (isNaN(isValidDate)) {
  alert("invalid date!!");
} else {
  let tomorrow = new Date(dateObject);
  tomorrow.setDate(dateObject.getDate() + 1);
}

function printFunction() {
  console.clear();
  for (let i = 0; i < employeeList.length; i++) {
    console.log("-------------------------");
    console.log(`Name: ${employeeList[i].name}`);
    console.log(`Age: ${employeeList[i].age}`);
    console.log(`Salary: ${employeeList[i].salary}`);
    console.log(`Position:${employeeList[i].position}`);
  }
}
// let str_input = prompt("Enter a word").toLowerCase();
// console.log(reverseString(str_input));
// str_input = prompt("Enter a word");
// console.log(capitalizeFirstLetter(str_input));
// console.log(removeDuplicate);
let listPosition, position;
let newEmploy;
let newAge;
let newSalary;
let newPosition;
let input = prompt(
  "Enter your command (New,Delete,Update,Complete and -1 to quit)"
).toLowerCase();
while (input !== "-1") {
  switch (input) {
    case "create":
      newEmploy = prompt("Name:");
      newAge = Number(prompt("Age:"));
      newSalary = Number(prompt("Salary:"));
      newPosition = prompt("Position:");
      employeeList.push({
        name: newEmploy,
        age: newAge,
        salary: newSalary,
        position: newPosition,
      });
      printFunction();
      break;
    case "read":
      printFunction();
      break;
    case "update":
      listPosition = Number(prompt("Enter the position of the list"));
      if (listPosition <= employeeList.length && listPosition > 0) {
        position = listPosition - 1;
        newEmploy = prompt("Name:");
        newAge = Number(prompt("Age:"));
        newSalary = Number(prompt("Salary:"));
        newPosition = prompt("Position:");
        employeeList[position].name = newEmploy;
        employeeList[position].age = newAge;
        employeeList[position].salary = newSalary;
        employeeList[position].position = newPosition;
      }
      printFunction();
      break;
    case "delete":
      listPosition = Number(prompt("Enter the position:"));
      if (listPosition <= employeeList.length && listPosition > 0) {
        position = listPosition - 1;
        employeeList.splice(position - 1, 1);
      } else {
        alert("Re-enter");
      }
      printFunction();
      break;
    default:
      alert("Re-enter");
      break;
  }
  input = prompt(
    "Enter your command (New,Delete,Update,Complete and -1 to quit)"
  ).toLowerCase();
}
