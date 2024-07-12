import React, { useCallback, useMemo, useState } from "react";
import UserList from "./components/UserList";
import { users } from "./api/users";
import { Stack } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import "./styles.css";

export default function App() {
  const [filter, setFilter] = useState("");
  const [select, setSelect] = useState("name");

  const filterUsers = useCallback(
    (filterText) => {
      return users.filter((user) => {
        const field = user[select];
        return String(field).toLowerCase().includes(filterText.toLowerCase());
      });
    },
    [select]
  );

  const filteredUsers = useMemo(() => filterUsers(filter), [filter, filterUsers]);

  return (
    <Stack direction="column" justifyContent="center" alignItems="center" spacing={4} sx={{ marginTop: "20px" }}>
      <FormControl sx={{ width: "250px" }}>
        <InputLabel>Search Parameter</InputLabel>
        <Select value={select} label="Search Parameter" onChange={(e) => setSelect(e.target.value)}>
          <MenuItem value={"name"}>Name</MenuItem>
          <MenuItem value={"age"}>Age</MenuItem>
          <MenuItem value={"email"}>Email</MenuItem>
        </Select>
      </FormControl>
      <TextField
        id="outlined-basic"
        variant="outlined"
        type="text"
        placeholder={`Filter by ${select}`}
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{ marginTop: "10px", width: "250px" }}
      />
      <UserList users={filteredUsers} />
    </Stack>
  );
}
