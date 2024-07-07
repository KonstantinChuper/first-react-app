import React, { useState } from "react";
import { connect } from "react-redux";
import { setUserInfo, updateForm } from "../redux/actions";

const UserForm = ({ form, setUserInfo, updateForm }) => {
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name !== "" && form.status !== "") {
      setUserInfo({ name: form.name, status: form.status });
      updateForm({ name: "", status: "" });
      setError("");
    } else {
      setError("Please fill out all fields");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateForm({ [name]: value });
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit User Info</h2>
      <div>
        <label>Name:</label> <input type="text" name="name" value={form.name} onChange={handleChange} />
      </div>
      <div>
        <label>Status:</label>{" "}
        <select name="status" value={form.status} onChange={handleChange}>
          <option value="">Select status</option>
          <option value="online">online</option>
          <option value="offline">offline</option>
        </select>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Update</button>
    </form>
  );
};

const mapStateToProps = (state) => ({
  form: state.form,
});

const mapDispatchToProps = {
  setUserInfo,
  updateForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
