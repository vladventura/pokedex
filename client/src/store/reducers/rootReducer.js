import actions from "../actions/actionTypes";
let initState = {
  name: "",
  id: "",
  description: "",
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.GET_POKE:
      return state;
    case actions.SET_POKE:
      return state;
    default:
      return state;
  }
};

export default rootReducer;
