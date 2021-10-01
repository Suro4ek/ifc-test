import { HANDLE_LOGGED_IN } from "../types";
const initialState = {
  isLoggedIn: false,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_LOGGED_IN:
      return { ...state, isLoggedIn: action.isLoggedIn };
    default:
      return state;
  }
};
