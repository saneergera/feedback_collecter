import axios from "axios";
import { FETCH_USERS } from "./types";

export const fetchUser = () => {
  return async dispatch => {
    const res = await axios.get("/api/current_user");
    dispatch({ type: FETCH_USERS, payload: res.data });
  };
};

export const stripe = token => {
  return async dispatch => {
    const res = await axios.post("/api/stripe", token);
    console.log(res.data);
    dispatch({ type: FETCH_USERS, payload: res.data });
  };
};
