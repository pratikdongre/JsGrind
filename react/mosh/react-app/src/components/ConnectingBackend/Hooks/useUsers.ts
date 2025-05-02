import { useEffect, useState } from "react";
// import userService, { User } from "../services/userService";

import userService, {
  User,
} from "../services/BIfuractionUserService/userService";
import { CanceledError } from "../services/api-client";

function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    console.log("fetching data");

    // new Promise((resolve) => setTimeout(resolve, 0))
    // .then(() => {
    //   return apiClient.get<User[]>("/users", {
    //     signal,
    //   });
    // })

    const { request, cancel } = userService.getAll<User>();

    request
      .then((res) => {
        // console.log(res.data[0].name ));

        setUsers(res.data);
        setError("");
      })
      .catch((err) => {
        // if (axios.isCancel(err)) return;
        if (err instanceof CanceledError) return;
        setError(err.message);
        setUsers([]);
      })
      .finally(() => {
        setIsLoading(false);
        console.log("fetchin done");
      });

    return () => {
      console.log("unmounting ,cancelling the request");

      cancel();
    };
  }, []);

  return { users, error, isLoading, setUsers, setError };
}

export default useUsers;
