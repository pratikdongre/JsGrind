













import React, { useState, useEffect, ReactNode, Fragment } from "react";
import axios, { AxiosError } from "axios";

interface User {
  id: number;
  name: string;
}

function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  // get -- promise -- res/err

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchData = async () => {
      try {
        console.log("Fetching data...");
        await new Promise((res) => setTimeout(res, 5000));

        const res = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/users",
          { signal }
        );
        setUsers(res.data);
        setError("");
        console.log("data feteched");
      } catch (err) {
        setError((err as AxiosError).message);
        setUsers([]);
      }
    };

    //    axios
    //     .get<User[]>("https://jsonplaceholder.typicode.com/xusers")
    //     .then((res) => {
    //       // console.log(res.data[0].name ));
    //       setUsers(res.data);
    //     })
    //     .catch((err) => setError(err.message));
    fetchData();

    return () => {
      console.log("componenent unmounting , cancelling request");
      controller.abort();
    };
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

function App() {
  const [showUser, setShowUser] = useState(true);
  return (
    <>
      <button onClick={() => setShowUser(!showUser)}>Toggle User list</button>
      {showUser && <UserList></UserList>}
    </>
  );
}

export default App;
