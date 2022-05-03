import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { small, big } from "../actions/index";

const Names = () => {
  const name = useSelector((state) => state.showName);
  const dispatch = useDispatch();
  return (
    <div>
      {name}
      <button onClick={() => dispatch(small())}>small</button>
      <button onClick={() => dispatch(big())}>big</button>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Names;
