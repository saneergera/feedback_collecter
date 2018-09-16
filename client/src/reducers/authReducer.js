import { FETCH_USERS } from "../actions/types";

var reducer1 = function(state = {}, action) {
  console.log(action);
  console.log(FETCH_USERS);
  console.log(action.type === FETCH_USERS);
  switch (action.type) {
    case FETCH_USERS:
      return action.payload || false;
      break;
    default:
      return state;
  }
};

export default reducer1;
