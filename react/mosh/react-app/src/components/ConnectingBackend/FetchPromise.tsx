import React, { useState, useEffect, ReactNode, Fragment } from "react";
import axios from "axios";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/xusers")
      .then((res) => {
        // console.log(res.data[0].name ));
        setUsers(res.data);
      })
      .catch((err) => setError(err.message));
  }, []);

  // return <div>{users}</div>;
  return (
    <div>
      {error && <p className="text-danger">{error}</p>}
      {users.map((item, index) => (
        <ul className="d-flex flex-row d list-group" key={item.id}>
          <li className="list-group-item">{item.id}</li>

          <li className="list-group-item">{item.name}</li>
        </ul>
      ))}
    </div>
  );
}

export default App;
