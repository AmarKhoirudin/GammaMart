import ActionType from "../Action/ActionType";

const globalState = {};

export const rootReducer = (state = globalState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
