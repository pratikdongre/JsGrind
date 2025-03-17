// props:- a read only properties that are shared between components
// a parent component can send data to a child component(who know how to render it contains jsx )
// can use default parametes in case if parent does not provide any data
// <component key=value/>

function Student({ name = "Guest", age = 18, isStudent = false }) {
  return (
    <div className="stud">
      <p>Name : {name}</p>
      <p>Age : {age}</p>
      <p>Student : {isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

export default Student;
