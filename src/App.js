import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, updateNum } from "./actions";
import "./styles.css";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const [sliderNum, setSliderNum] = useState(1);
  // const updateNum = useSelector((state) => state.updateNum); //use this to update the value of the slider
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSliderNum(parseInt(e.target.value));

    dispatch(updateNum({ num: e.target.value }));
  };

  return (
    <div className="App">
      <div class="wrapper">
        <h1>Counter {counter}</h1>
        <h2>{sliderNum}</h2>
        <input
          onChange={handleChange}
          type="range"
          className="custom-range"
          value={sliderNum}
          min="1"
          max="50"
          id="customRange2"
        ></input>
        <button
          className="btn btn-success"
          onClick={() => dispatch(increment(sliderNum))}
        >
          +
        </button>
        <button
          className="btn btn-danger"
          onClick={() => dispatch(decrement(sliderNum))}
        >
          -
        </button>
        {isLogged ? (
          <h3>Valuable information I should'nt see unless im logged in</h3>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
