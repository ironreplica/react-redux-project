const sliderReducer = (state = 1, action) => {
  switch (action.type) {
    case "CHANGE_INPUT_VALUE":
      console.log(action.payload);
      return state;
    default:
      return state;
  }
};
export default sliderReducer;
