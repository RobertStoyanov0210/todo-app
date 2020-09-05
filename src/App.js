import React from "react";
import TodoItem from "./components/TodoItem";

import todos from "./todosData";

function App() {
  const todoList = todos.map((item) => <TodoItem key={item.id} item={item} />);
  return (
    <div className="todo-list">
      <h1 style={{ margin: 5 }}>TODOS</h1>
      {todoList}
    </div>
  );
}

export default App;
