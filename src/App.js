import { useState } from "react";
import "./App.scss";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([]);

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
