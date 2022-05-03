import React from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import Counter from "../containers/Counter";
import Names from "../containers/Names";

function App() {
  return (
    <>
      <Counter />
      <Names />
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </>
  );
}

export default App;
