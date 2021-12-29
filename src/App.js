import { useState } from "react";
import "./App.scss";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodo] = useState([]);

  function addTodo(todo) {
    setTodo([todo, ...todos]);
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>React ToDo App</p>
        <TodoForm addTodo={addTodo} />
      </header>
    </div>
  );
}

export default App;
