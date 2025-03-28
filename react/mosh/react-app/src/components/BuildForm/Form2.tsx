import React, {
  FormEvent,
  HTMLInputTypeAttribute,
  useRef,
  useState,
} from "react";
// getting value using stateHook
const Form = () => {
  const [person, setPerson] = useState({
    name: "",
    age: "0",
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3 container mt-3">
        <div>
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            onChange={(event) =>
              setPerson({ ...person, name: event.target.value })
            }
            value={person.name}
            id="name"
            type="text"
            className="form-control"
          />
        </div>
        <div>
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            onChange={(event) =>
              setPerson({ ...person, age: event.target.value })
            }
            value={person.age}
            id="age"
            type="number"
            className="form-control"
          />
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
