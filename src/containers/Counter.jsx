import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, sub, small, big } from "../actions/index";

const Counter = () => {
  const myState = useSelector((state) => state.changeNum);
  const dispatch = useDispatch();
  return (
    <div>
      Counter Example using Redux
      <br />
      <button onClick={() => dispatch(sub())}>-</button>
      <input type="text" value={myState} />
      <button onClick={() => dispatch(add())}>+</button>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Counter;
