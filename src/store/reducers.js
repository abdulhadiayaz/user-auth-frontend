import { combineReducers } from "redux";

import authReducer from "./reducers/auth";
import successReducer from "./reducers/success";

const rootReducer = combineReducers({
  oemAuth: authReducer,
  oemSuccess: successReducer,
});

export default rootReducer;
