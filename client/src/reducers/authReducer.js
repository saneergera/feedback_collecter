import { FETCH_USERS } from "../actions/types";

var reducer1 = function(state = null, action) {
  switch (action.type) {
    case FETCH_USERS:
      return action.payload || false;
      break;
    default:
      return state;
  }
};

export default reducer1;
