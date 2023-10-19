import { ACTIONS } from "../../layouts/MainLayout/MainLayout.constants";

const initialState = {
  message: null,
};

const oemSuccess = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTIONS.SET_SUCCESS:
      const { message } = payload;
      return {
        ...state,
        message,
      };
    default:
      return state;
  }
};

export default oemSuccess;
