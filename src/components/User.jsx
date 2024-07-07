import React from "react";
import { connect } from "react-redux";

const User = ({ user }) => {
  return (
    <div className="container">
      <p>Name: {user.name}</p>
      <p>
        Status:{" "}
        {user.status && <span
          className="status"
          style={{
            backgroundColor: user.status === "online" ? "#15ff00" : "red",
          }}
        ></span>}
        {user.status}
      </p>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(User);
