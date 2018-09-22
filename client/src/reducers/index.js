import { combineReducers } from "redux";
import reducer1 from "./authReducer";
import { reducer as formReducer } from "redux-form";
const finalReducer = combineReducers({
  auth: reducer1,
  form: formReducer
});

export default finalReducer;
