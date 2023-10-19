import { ACTIONS } from "./Login.constants";

export const setOemUserData = (userData) => ({
  type: ACTIONS.SET_OEM_USER,
  payload: userData,
});

export const logoutOemUser = () => ({
  type: ACTIONS.LOGOUT_OEM_USER,
});
