// Dom  :- Document Object model is a object representation as tree of webpage which helps us to navigate through the nodes in order to manipulate them .

// React creates a virtual representation of the DOM (Virtual DOM)
// When the component's state or props change, React triggers a process called reconciliation
// During reconciliation, React uses a diffing algorithm to compare the current Virtual DOM with the previous one
// It identifies the minimal set of changes needed
// Only the elements that have changed are updated in the actual DOM
// This approach makes DOM updates more efficient and improves performance

// with the help of react you can direclty put the js into the html and this is called as jsx

// import and export

{
  /* <script src=""></script> */
}
// this is way to import a file from src in html

// in node
// const axios = require("axios") // import
// module.exports = {anObject};

// in react
// import axios from "axios";
// export default function() {}...;
// export functionName

// ternary operator
let myAge = 10;
let isOfAge = false;

if (myAge > 18) {
  isOfAge = true;
} else {
  isOfAge = false;
}

myAge > 18 ? (isOfAge = true) : (isOfAge = false);

isOfAge = myAge > 18 ? true : false;
isOfAge = myAge > 18;

console.log(isOfAge);

let color = "";
let isCorrect = true;

color = isCorrect ? "green" : "red";
console.log(color + isCorrect);

// or
color = "red";
isCorrect = false;
color = isCorrect && "green";

/// optional chaining
// we use thsi in object like a situation if we are fetching something from an api
// and we are not aware or wehther the object exist or not
// there we use this
const fetchData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  const name = data[0].id;
  console.log(name + " pointer");
};

fetchData();

const fetchData2 = async () => {
  const response = await fetch("https://randomuser.me/api/");
  const data = await response.json();
  const name = data?.results[0]?.gender;
  console.log(name);
};

fetchData2();

const fetchData3 = async (toSearch) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/${toSearch}`
  );
  const data = await response.json();
  const found = data[0]?.id;
  console.log(found);
};
fetchData3("posts");
