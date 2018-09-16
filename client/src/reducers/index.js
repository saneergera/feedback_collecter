import { combineReducers } from "redux";
import reducer1 from "./authReducer";

const finalReducer = combineReducers({
  auth: reducer1
});

export default finalReducer;
