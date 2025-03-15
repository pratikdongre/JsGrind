function Food() {
  const food1 = "Apple";
  const food2 = "Banana";
  return (
    <ul>
      <li>{food1.toLowerCase()}</li>
      <li>{food2.toUpperCase()}</li>
    </ul>
  );
}

export default Food;
