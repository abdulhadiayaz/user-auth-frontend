import { ACTIONS } from "../../screens/Login/Login.constants";

const initialState = {
  isAuthenticated: false,
  accessToken: null,
  userId: null,
  name: null,
  phoneNumber: null,
  cnic: null,
  email: null,
  userName: null,
  companyId: null,
  role: null,
  companyLogo: null,
  companyName: null,
};

const oemAuth = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTIONS.SET_OEM_USER:
      const {
        isAuthenticated,
        accessToken,
        userId,
        name,
        phoneNumber,
        email,
        userName,
        companyId,
        role,
        companyLogo,
        companyName,
      } = payload;
      return {
        ...state,
        isAuthenticated,
        accessToken,
        userId,
        name,
        phoneNumber,
        email,
        userName,
        companyId,
        role,
        companyLogo,
        companyName,
      };
    case ACTIONS.LOGOUT_OEM_USER:
      return initialState;
    default:
      return state;
  }
};

export default oemAuth;
