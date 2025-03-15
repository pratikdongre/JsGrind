// props:- a read only properties that are shared between components
// a parent component can send data to a child component(who know how to render it contains jsx )
// can use default parametes in case if parent does not provide any data

import Student from "./Lesson4/Student.jsx";

function App() {
  return (
    <>
      <Student name="Pratik" age={30} isStudent={false} />
      <Student name="Patrick" age={26} isStudent={true} />
      <Student age={6} isStudent={true} />
      <Student />
    </>
  );
}

Student.propTypes = {};

export default App;
