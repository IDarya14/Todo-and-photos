import './App.css';
import { Home } from './components/Home/Home';
import { Todos } from './components/Todos/Todos';
import { Photos } from './components/Photos/Photos';
import { TodoItem } from './components/TodoItem/TodoItem';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/todos"
          element={
            <Home>
              <Todos />
            </Home>
          }
        />
        <Route
          path="/photos"
          element={
            <Home>
              <Photos />
            </Home>
          }
        />
        <Route path="/todos/:id" element={<TodoItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
