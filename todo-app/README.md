# Full-Stack To-Do App

A MERN stack application (React + Express, with in-memory data storage for simplicity).

## Features

- ✅ Add new to-do items
- ✅ Mark tasks as complete/incomplete
- ✅ Delete tasks
- ✅ Real-time sync between frontend and backend
- ✅ Clean, modern UI with gradient styling

## Project Structure

```
todo-app/
├── server/          # Express backend
│   ├── package.json
│   └── index.js
└── client/          # React frontend (Vite)
    ├── src/
    │   ├── App.jsx
    │   ├── App.css
    │   └── main.jsx
    ├── index.html
    ├── vite.config.js
    └── package.json
```

## Installation & Setup

### Backend Setup

```bash
cd server
npm install
npm start
```

Server will run on `http://localhost:5000`

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

Client will run on `http://localhost:3000`

## API Endpoints

- `GET /api/todos` — Fetch all todos
- `POST /api/todos` — Create a new todo (body: `{ text: string }`)
- `PUT /api/todos/:id` — Toggle completion status
- `DELETE /api/todos/:id` — Delete a todo

## Technology Stack

- **Frontend:** React 18, Vite, CSS3
- **Backend:** Node.js, Express.js, CORS
- **State Management:** React Hooks (useState, useEffect)
- **Data Storage:** In-memory (resets on server restart)

## Future Enhancements

- [ ] Add MongoDB for persistent data
- [ ] User authentication
- [ ] Due dates and priorities
- [ ] Dark mode toggle
- [ ] Deploy to cloud platform
