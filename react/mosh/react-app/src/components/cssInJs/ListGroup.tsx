import { useState, MouseEvent } from "react";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  //   background-color: red;
  padding: 10px 15px;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 10px 0;
  background: ${(props) => (props.active ? "blue" : "none")};
`;

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

  const [SelectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="container">
      <h2>List of {heading}</h2>
      <List>
        {items.length === 0 ? (
          <ListItem>NO items found</ListItem>
        ) : (
          items.map((item, index) => {
            return (
              <ListItem
                active={index === SelectedIndex}
                key={index}
                onClick={() => {
                  setSelectedIndex(index);
                  onSelectItem?.(item);
                }}
              >
                {item}
              </ListItem>
            );
          })
        )}
      </List>
    </div>
  );
}

export default PropsComponent;
