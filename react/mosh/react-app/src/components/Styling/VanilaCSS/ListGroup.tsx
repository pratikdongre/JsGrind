import "./ListGroup.css";

interface ListGroupProps {
  items?: string[];
  heading?: string;
}

function ListGroup({ items = [], heading = "default" }: ListGroupProps) {
  return (
    <>
      <h2>LIst of {heading}</h2>
      <ul className="list-group">
        {items.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </>
  );
}

export default ListGroup;
