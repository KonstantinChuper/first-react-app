import React from "react";
import { Stack } from "@mui/material";

export default function UserList({ users }) {
  return (
    <Stack component="ul" direction="column" justifyContent="center" alignItems="flex-start" spacing={4}>
      {users.map((user) => (
        <Stack key={user.id} component="li" direction="column" justifyContent="center" alignItems="flex-start" spacing={1}>
          <span>Name: {user.name}</span>
          <span>Age: {user.age}</span>
          <span>Email: {user.email}</span>
        </Stack>
      ))}
    </Stack>
  );
}
