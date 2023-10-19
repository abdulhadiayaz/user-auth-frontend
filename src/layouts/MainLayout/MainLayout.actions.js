import { ACTIONS } from "./MainLayout.constants";

export const setOemSuccess = (successMessage) => ({
  type: ACTIONS.SET_SUCCESS,
  payload: successMessage,
});
