import React, { useState } from "react";
import { connect } from "react-redux";
import { setUserInfo } from "../redux/actions";

const UserForm = ({ setUserInfo }) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserInfo({ name, status });
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Status:</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="">Select status</option>
          <option value="online">online</option>
          <option value="offline">offline</option>
        </select>
      </div>
      <button type="submit">Update</button>
    </form>
  );
};

const mapDispatchToProps = {
  setUserInfo,
};

export default connect(null, mapDispatchToProps)(UserForm);
