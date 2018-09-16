import axios from "axios";
import { FETCH_USERS } from "./types";

export const fetchUser = () => {
  return async dispatch => {
    const res = await axios.get("/api/current_user");
    dispatch({ type: FETCH_USERS, payload: res.data });
  };
};
