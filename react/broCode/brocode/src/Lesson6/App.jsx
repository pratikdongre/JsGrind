
import List from "./Lesson6/List";

function App() {
  const fruits = [{id:0,name : 'apple', calories : 95},
    {id:1 ,name : 'guava', calories : 95},
    {id:2 ,name : 'banana', calories : 101},
    {id:3 ,name : 'chocolate', calories : 150},
    {id:4 ,name : 'icecream', calories : 140},
    {id:5 ,name : 'orange', calories : 56}];

    // const veggies = [{id:6,name : 'brocoli', calories : 63}] 
    const veggies = []


  return (
    <>
  <List items={fruits} category = "Fruits"/>
   {veggies.length > 0 ? <List items={veggies} category = "Veggies"/> : null}
   {veggies.length > 0 && <List items={veggies} category = "Veggies"/> }

    </>
  );
}


export default App;
