import React from "react";
import { connect } from "react-redux";
import UserItem from "./UserItem";

function UserList({ users, filter }) {
  const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <ul>
      {filteredUsers.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </ul>
  );
}

const mapStateToProps = (state) => ({
  users: state.users,
  filter: state.filter,
});

export default connect(mapStateToProps)(UserList);
