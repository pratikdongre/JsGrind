import { useState } from "react";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "john",
    },
  });

  const handleClick = () => {
    // game.player.name = "Bob";
    setGame({ ...game, player: { ...game.player, name: "Bob" } });
  };

  return <div onClick={handleClick}>{game.player.name}Click me</div>;
}

export default App;
