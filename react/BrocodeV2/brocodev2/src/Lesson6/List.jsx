function List({ Items = [], category = "anonymous" }) {
  const Colors = ["Green", "blue", "Yellow"];
  Colors.sort();

  const Fruits = [
    { id: 1, name: "Apple", calories: 20 },
    { id: 2, name: "Kela", calories: 10 },
    { id: 3, name: "Aam", calories: 14 },
    { id: 4, name: "jaam", calories: 900 },
    { id: 5, name: "Tarbuz", calories: 23 },
  ];

  Fruits.sort((a, b) => a.name.localeCompare(b.name)); // alphabetical
  Fruits.sort((a, b) => b.name.localeCompare(a.name)); // reverse alphabetical
  Fruits.sort((a, b) => a.calories - b.calories); // numeric
  Fruits.sort((a, b) => b.calories - a.calories);

  const lowCalFruit = Fruits.filter((fruit) => fruit.calories < 100);

  let ListItems = Colors.map((color) => {
    return <li>{color}</li>;
  });

  const items = Items;
  ListItems = items.map((fruit) => (
    <li className="bg-blue-100" key={fruit.id}>
      <span> {fruit.name} :- </span>
      <span>{fruit.calories}</span>
    </li>
  ));

  return (
    <>
      <h3 className="font-bold text-amber-400">category :- {category}</h3>
      <ol>{ListItems}</ol>
    </>
  );
}

export default List;
