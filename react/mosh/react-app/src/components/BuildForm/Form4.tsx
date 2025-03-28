import React, { FormEvent, HTMLInputTypeAttribute, useRef } from "react";

import { FieldValues, useForm } from "react-hook-form";

interface FormData {
  name: "string";
  age: "number";
}

// getting value using useForm
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  //   console.log(errors);

  //   console.log(register("name"));

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3 container mt-3">
        <div>
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            {...register("name", { required: true, minLength: 3 })}
            id="name"
            type="text"
            className="form-control"
          />
          {errors.name?.type == "required" && (
            <p className="text-danger">The Name is required</p>
          )}
          {errors.name?.type == "minLength" && (
            <p className="text-danger">The name must be at least 3 chars. </p>
          )}
        </div>
        <div>
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            {...register("age")}
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
