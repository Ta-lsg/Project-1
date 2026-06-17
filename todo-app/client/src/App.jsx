import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const fetchTodos = async () => {
    const res = await fetch('http://localhost:5000/api/todos');
    const data = await res.json();
    setTodos(data);
  };

  useEffect(() => { fetchTodos(); }, []);

  const addTodo = async () => {
    if (!text.trim()) return;
    await fetch('http://localhost:5000/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    });
    setText('');
    fetchTodos();
  };

  const toggleComplete = async (id) => {
    await fetch(`http://localhost:5000/api/todos/${id}`, { method: 'PUT' });
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await fetch(`http://localhost:5000/api/todos/${id}`, { method: 'DELETE' });
    fetchTodos();
  };

  return (
    <div className="App">
      <h1>My To\u2011Do List</h1>
      <input value={text} onChange={e => setText(e.target.value)} placeholder="Add a task..." />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <span onClick={() => toggleComplete(todo.id)} style={{ cursor: 'pointer' }}>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
