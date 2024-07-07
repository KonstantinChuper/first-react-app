import { SET_USER_INFO, UPDATE_FORM } from "./actions";

const initialState = {
  user: {
    name: "",
    status: "",
  },
  form: {
    name: "",
    status: "",
  },
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      };
    case UPDATE_FORM:
      return {
        ...state,
        form: {
          ...state.form,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

export default Reducer;