const initialState = {
  users: [
    { id: 1, name: "Johny Depp" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Alice Johnson" },
    { id: 4, name: "Jackie Chan" },
  ],
  filter: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
