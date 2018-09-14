import { combineReducers } from "redux";
import authReducer from "./authReducer";

const finalReducer = combineReducers({
  auth: authReducer
});

export default finalReducer;
