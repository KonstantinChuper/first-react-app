import { useForm } from "react-hook-form";

export default function LoginForm() {
const {register, handleSubmit, reset} = useForm();

function sendData(data) {
    console.log(data);
    reset();
}

  return (
    <form onSubmit={handleSubmit(sendData)}>
        <label>
        Login:{" "}
        <input
          type="text"
          {...register("text", {
            required: "Field can not be empty",
          })}
        />
      </label>
      <label>
        Email:{" "}
        <input
          type="email"
          {...register("email", {
            required: "Enter Email",             
          })}
        />
      </label>
      <label>
        Password:{" "}
        <input
          type="password"
          {...register("password", {
            required: "Enter password",
            minLength: {
              value: 6,
              message: "Password must have minimal 6 symbols",
            },
          })}
        />
      </label>
      <button type="submit">Registration</button>
    </form>
  );
}
