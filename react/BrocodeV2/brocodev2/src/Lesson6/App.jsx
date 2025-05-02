import React from "react";
import Header from "./Lesson1/Header";
import Card from "./Lesson2/Card";
import Button2 from "./Lesson3/Button2";
import Student from "./Lesson4.jsx/Student";
import List from "./Lesson6/List";

import UserGreeting from "./Lesson5/UserGreeting";
function App() {
  let Fruits = [
    { id: 1, name: "Apple", calories: 20 },
    { id: 2, name: "Kela", calories: 10 },
    { id: 3, name: "Aam", calories: 14 },
    { id: 4, name: "jaam", calories: 900 },
    { id: 5, name: "Tarbuz", calories: 23 },
  ];

  let Vegetables = [
    { id: 1, name: "Gobi", calories: 20 },
    { id: 2, name: "aalo", calories: 10 },
    { id: 3, name: "kanda", calories: 14 },
    { id: 4, name: "gazar", calories: 900 },
    { id: 5, name: "tamatar", calories: 23 },
  ];

  Vegetables = [];

  // Fruits = [];
  return (
    // <>
    //   {/* <Header></Header>
    //   <Food></Food>
    //   <hr />
    //   <Food></Food>

    //   <Footer></Footer> */}
    // </>

    // <>
    //   <Card></Card>
    // </>

    // <>
    //   <Button2></Button2>
    // </>

    // <>
    //   <Student name="Pratik" />
    //   <Student name="Neha" />
    // </>

    // <>
    //   <UserGreeting isLoggedin="true" username="Pratik"></UserGreeting>
    //   <UserGreeting username="Monu"></UserGreeting>
    // </>

    <>
      {Fruits.length > 0 ? (
        <List Items={Fruits} category={"Fruits"}></List>
      ) : null}
      <hr />

      {Vegetables.length > 0 && (
        <List Items={Vegetables} category="Veggies"></List>
      )}
    </>
  );
}

export default App;
