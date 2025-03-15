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
