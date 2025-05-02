// import React, { useState, useEffect, ReactNode, Fragment } from "react";
// import axios, { AxiosError, CanceledError } from "axios";

// interface User {
//   id: number;
//   name: string;
// }

// function UserList() {
//   const [users, setUsers] = useState<User[]>([]);
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(true);
//   // get -- promise -- res/err

//   useEffect(() => {
//     const controller = new AbortController();
//     const signal = controller.signal;
//     const fetchData = async () => {
//       try {
//         console.log("Fetching data...");
//         setIsLoading(true);
//         await new Promise((res) => setTimeout(res, 5000));

//         const res = await axios.get<User[]>(
//           "https://jsonplaceholder.typicode.com/users",
//           { signal }
//         );
//         setUsers(res.data);
//         setError("");
//         console.log("data feteched");
//         setIsLoading(false);
//       } catch (err) {
//         if (err instanceof CanceledError) return;
//         setError((err as AxiosError).message);
//         setUsers([]);
//         setIsLoading(false);
//       }
//     };

//     //    axios
//     //     .get<User[]>("https://jsonplaceholder.typicode.com/xusers")
//     //     .then((res) => {
//     //       // console.log(res.data[0].name ));
//     //       setUsers(res.data);
//     //     })
//     //     .catch((err) => setError(err.message));
//     fetchData();

//     return () => {
//       console.log("componenent unmounting , cancelling request");
//       controller.abort();
//     };
//   }, []);

//   // return <div>{users}</div>;
//   return (
//     <div>
//       {isLoading && <div className="spinner-border"></div>}
//       {error && <p className="text-danger">{error}</p>}
//       {users.map((item, index) => (
//         <ul className="d-flex flex-row d list-group" key={item.id}>
//           <li className="list-group-item">{item.id}</li>

//           <li className="list-group-item">{item.name}</li>
//         </ul>
//       ))}
//     </div>
//   );
// }

// function App() {
//   const [showUser, setShowUser] = useState(true);
//   return (
//     <>
//       {/* <button onClick={() => setShowUser(!showUser)}>Toggle User list</button>
//       {showUser && <UserList></UserList>} */}
//       <UserList />
//     </>
//   );
// }

// export default App;

import React, { useState, useEffect, ReactNode, Fragment } from "react";
import axios from "axios";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setIsLoading(true);
    console.log("fetching data");

    new Promise((resolve) => setTimeout(resolve, 0))
      .then(() => {
        return axios.get<User[]>("https://jsonplaceholder.typicode.com/users", {
          signal,
        });
      })

      .then((res) => {
        // console.log(res.data[0].name ));

        setUsers(res.data);
        setError("");
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
        setError(err.message);
        setUsers([]);
      })
      .finally(() => {
        setIsLoading(false);
        console.log("fetchin done");
      });

    return () => {
      console.log("unmounting ,cancelling the request");

      controller.abort();
    };
  }, []);

  const deleteUser = (user: User) => {
    const ogState = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + user.id)
      .catch((err) => {
        setError(err.message);
        setUsers(ogState);
      });
  };

  const addUser = () => {
    const newUser = { id: 0, name: "pratik" };
    setUsers([newUser, ...users]);
    const ogState = [...users];

    axios
      .post("https://jsonplaceholder.typicode.com/users", newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(ogState);
      });
  };

  const updateUser = (user: User) => {
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));
    const ogstate = [...users];

    axios
      .patch(
        "https://jsonplaceholder.typicode.com/users/" + user.id,
        updateUser
      )
      .catch((err) => {
        setError(err.message);
        setUsers(ogstate);
      });
  };

  // return <div>{users}</div>;
  return (
    <div>
      {isLoading && <div className="spinner-border"></div>}
      {error && <p className="text-danger">{error}</p>}
      <button className="btn btn-primary mb-4" onClick={addUser}>
        Add User
      </button>
      {users.map((user, index) => (
        <ul
          className="d-flex justify-content-between flex-row align-align-items-center list-group mb-2 p-2 border rounded"
          key={user.id}
        >
          <div className="d-flex gap-3 ">
            <li className="list-group-item">{user.id}</li>

            <li className="list-group-item">{user.name}</li>
          </div>

          <div className="d-flex flex-row gap-2">
            <button
              className="btn btn-outline-secondary"
              onClick={() => updateUser(user)}
            >
              Update
            </button>
            <button
              className="btn btn-outline-danger "
              onClick={() => deleteUser(user)}
            >
              Delete
            </button>
          </div>
        </ul>
      ))}
    </div>
  );
}

export default App;
