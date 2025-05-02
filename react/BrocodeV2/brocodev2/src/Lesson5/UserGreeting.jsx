import React from "react";

import styles from "./UserGreeting.module.css";
function UserGreeting({ isLoggedin = false, username = "Joker" }) {
  //   if (isLoggedin) {
  //     return <h1>Welcome {username}</h1>;
  //   }

  //   return <h1>Please Log in to continue {username}</h1>;

  const welcome = (
    <h1 className="bg-green-500 w-[150px] p-2 text-white">
      Welcome {username}
    </h1>
  );
  const login = (
    <h1 className={styles.login}>Please Log in to continue {username}</h1>
  );

  return isLoggedin ? welcome : login;
}

export default UserGreeting;
