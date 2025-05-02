function LearnFunction() {
  // function declaration
  function isDeclaration() {
    console.log("this is declaration");
  }

  isDeclaration();

  // ways to export
  // export default function ... () {}
  // or
  // export default functioName...

  // arrow function
  const arrFun = () => {
    console.log("this is arrow Function");
  };

  arrFun();

  // export const ...
  // export arrfunName...

  // anonymous function a function without a name

  setTimeout(() => {
    console.log("after one sec");
  }, 1000);
}

// LearnFunction();

function LearnTernary() {
  let name;
  name = "Pratik";
  let age;
  age = 16;

  age > 10 && console.log(name);
  // T &&
  // && use for condition check if condition is true then do that
  // && looks for first falsy value
  // else last truthy value

  name = "";

  let output = name || "anonymous";
  console.log(output);

  // || looks for first true value
  // else last false value gets printed

  //   ? looks for null and undefined only
  // not other falsy value which overcomes the problem with ||

  age > 10 ? console.log("hey") : console.log("hi");
}

//  LearnTernary();

const LearnObj = () => {
  let type = "sad";
  const person = {
    name: "pratik",
    age: 20,
    isMarried: false,
    type,
  };
  // normal life
  // const name = person.name;
  // mentos
  const { name, age, isMarried } = person;
  console.log(type);

  const person2 = { ...person, name: "john" };
  console.log(person2);

  const Emp = ["prit", "pras", "asi"];
  const tempEmp = [...Emp, "Pratik"];
};

// LearnObj();

function LearnObjFun() {
  let names = ["John", "Rock", "Kane", "John"];
  const stored = names.map((name) => {
    return name + ": WWe";
  });

  console.log(stored);

  const filterdNames = names.filter((name) => {
    return name !== "John";
  });
  console.log(filterdNames);

  const nums = [15000, 15000, 15000, 15000];
  let TaiMonthly = 6000;
  const value = nums.reduce((salary, expenses) => {
    salary += TaiMonthly;
    return salary - expenses;
  }, 46000);
  console.log(value);
}

LearnObjFun();
