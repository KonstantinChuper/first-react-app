import React from "react";
import { useSelector } from "react-redux";

export default function UserList() {
  const users = useSelector((state) => state.user.users);

  return (
    <div>
      <h1>UserList</h1>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              {user.name}, {user.email}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

