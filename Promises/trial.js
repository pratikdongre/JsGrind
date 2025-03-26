function hey() {
  let a = 1;

  {
    a++;
  }
  console.log(a);
}

// hey();

function checkValue(a) {
  return a > 10 ? "hey" : "no"; // ✅ Works fine!
}

console.log(checkValue(4));
