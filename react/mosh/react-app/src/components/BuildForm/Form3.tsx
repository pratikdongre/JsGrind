import React, { FormEvent, HTMLInputTypeAttribute, useRef } from "react";
// getting value using useRef
const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person = { name: "", age: 0 };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (nameRef.current !== null && ageRef.current !== null) {
      //   console.log(nameRef.current.value);
      //   console.log(ageRef.current.value);
      person.name = nameRef.current.value;
      person.age = parseInt(ageRef.current.value);

      //   console.log("Submitted");
      console.log(person);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3 container mt-3">
        <div>
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input ref={nameRef} id="name" type="text" className="form-control" />
        </div>
        <div>
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input ref={ageRef} id="age" type="number" className="form-control" />
        </div>
        <div className="mt-3">
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
