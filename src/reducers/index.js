import counterReducer from "./counter";
import sliderReducer from "./slider";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  slider: sliderReducer,
});

export default allReducers;
