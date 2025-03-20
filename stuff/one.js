let arr = [84426, 81729, 79766, 83483, 80305, 82328, 81988, 86214];
arr.map((x) => {
  let sixty = Math.floor((60 / 100) * x);

  let fourty = x - sixty;
  console.log(
    // `for ${x} the 60% is ${Math.floor(sixty)} and 40% is ${Math.floor(fourty)}`
    `${Math.floor(fourty)}`
  );
});
