import { combineReducers } from "redux";
import { SET_USER_INFO, UPDATE_FORM } from "./actions";

const initialState = {
  name: "",
  status: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORM:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user: userReducer,
  form: formReducer,
});

export default rootReducer;
