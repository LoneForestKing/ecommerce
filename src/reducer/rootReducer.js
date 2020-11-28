import { SELECT_PAGE } from "../_constants/action-types";

const initialState = {
  selectedPage: "",
};

function rootReducer(state = initialState, action) {
  if (action.type === SELECT_PAGE) {
    return Object.assign({}, state, {
      selectedPage: action.payload,
    });
  }

  return state;
}

export default rootReducer;
