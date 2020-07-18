import actions from "./actionTypes";
export const setPoke = (data) => {
  return (dispatch, getState) => {
    let action = {};
    dispatch(action);
  };
};

export const getPoke = (pk) => {
  return (dispatch, getState) => {
    console.log(pk);
    let action = {
      type: actions.GET_POKE,
    };
    dispatch(action);
  };
};
