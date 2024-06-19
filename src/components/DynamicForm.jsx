import React from "react";
import { useForm } from "react-hook-form";

export default function DynamicForm() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();

  function sendData(data) {
    console.log(data);
    reset();
  }

  const firstFieldValue = watch("firstField");

  return (
    <form onSubmit={handleSubmit(sendData)}>
      <label htmlFor="firstField">First Field</label>
      <input
        type="text"
        id="firstField"
        {...register("firstField", {
          required: "Field can not be empty",
          minLength: {
            value: 5,
            message: "Field must have minimum 5 symbols",
          },
        })}
      />
      {errors.firstField && <p>{errors.firstField.message}</p>}
      {firstFieldValue && firstFieldValue.length >= 5 && (
        <input
          type="text"
          id="secondField"
          {...register("secondField", {
            required: "Field can not be empty",
            minLength: {
              value: 5,
              message: "Field must have minimum 5 symbols",
            },
          })}
        />
      )}
      <button>Submit</button>
    </form>
  );
}
