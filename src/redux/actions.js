export const SET_USER_INFO = "SET_USER_INFO";
export const UPDATE_FORM = "UPDATE_FORM";

export const setUserInfo = (user) => ({
  type: SET_USER_INFO,
  payload: user,
});

export const updateForm = (formData) => ({
  type: UPDATE_FORM,
  payload: formData,
});
