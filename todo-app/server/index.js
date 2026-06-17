const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

let todos = [
  { id: 1, text: 'Learn React', completed: false },
  { id: 2, text: 'Build a project', completed: false }
];

app.get('/api/todos', (req, res) => res.json(todos));

app.post('/api/todos', (req, res) => {
  const newTodo = { id: Date.now(), text: req.body.text, completed: false };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.put('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find(t => t.id === id);
  if (todo) {
    todo.completed = !todo.completed;
    res.json(todo);
  } else res.status(404).send('Not found');
});

app.delete('/api/todos/:id', (req, res) => {
  todos = todos.filter(t => t.id !== parseInt(req.params.id));
  res.status(204).send();
});

app.listen(5000, () => console.log('Server running on port 5000'));
