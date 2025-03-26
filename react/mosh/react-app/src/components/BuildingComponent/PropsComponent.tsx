import { useState, MouseEvent } from "react";

interface ListGroupProps {
  items?: string[];
  heading?: string;
  onSelectItem?: (item: string) => void;
}

function PropsComponent({
  items = [],
  heading = "items",
  onSelectItem,
}: ListGroupProps) {
  //   const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
  //     e.currentTarget.style.backgroundColor = "yellow";
  //   };

  const [SelectedIndex, setSelectedIndex] = useState(-1);

  return (
    <div className="container">
      <h2>List of {heading}</h2>
      <ul className="list-group">
        {items.length === 0 ? (
          <li>NO items found</li>
        ) : (
          items.map((item, index) => {
            return (
              <li
                className={
                  SelectedIndex === index
                    ? "list-group-item active"
                    : "list-group-item"
                }
                key={index}
                onClick={() => {
                  setSelectedIndex(index);
                  onSelectItem?.(item);
                }}
              >
                {item}
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
}

export default PropsComponent;



{/* <>
// import Message from "./Message";
import PropsComponent from "./components/PropsComponent";

function App() {
  let items = ["Nagpur", "Goa", "Mumbai", "Pune"];

  let handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <PropsComponent
        items={items}
        heading="cities"
        onSelectItem={handleSelectItem}
      />
      <PropsComponent />
    </div>
  );
}

export default App;
</> */}