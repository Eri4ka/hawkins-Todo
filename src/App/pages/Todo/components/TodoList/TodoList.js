import { useState } from 'react';

import './TodoList.scss';
import TodoListItem from './components/TodoListItem';
import TodoAdd from './components/TodoAdd';

const TodoList = () => {
  const [toDo, setToDo] = useState([]);
  const [id, setID] = useState(1);

  const handleAddToDo = (ref) => {
    const toDoItem = { id, title: ref.current.value, favorite: false };
    setToDo((todo) => [...todo, toDoItem]);
    setID((id) => id + 1);
  };

  const handleDeleteToDo = (id) => {
    setToDo((todo) => todo.filter((item) => item.id !== id));
  };

  const handleToggleFavorite = (id) => {
    setToDo((todo) =>
      todo.map((item) => {
        if (item.id === id) {
          return { ...item, favorite: !item.favorite };
        } else {
          return item;
        }
      }),
    );
  };

  return (
    <div className='todo-list'>
      <ul className='list todo-list__list'>
        {toDo.map((todo) => (
          <TodoListItem
            key={todo.id}
            toDo={todo}
            handleDeleteToDo={handleDeleteToDo}
            handleToggleFavorite={handleToggleFavorite}
          />
        ))}
      </ul>
      <TodoAdd handleAddToDo={handleAddToDo} />
    </div>
  );
};

export default TodoList;
