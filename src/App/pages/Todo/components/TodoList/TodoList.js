import { useState } from 'react';

import TodoListItem from './components/TodoListItem';
import TodoAdd from './components/TodoAdd';

import { baseTheme } from 'styles/theme';
import styled from 'styled-components';

const Container = styled.div`
  width: 70%;
  background-color: ${baseTheme.colors.white};
  border-radius: 10px;
  padding: 18px 16px;
  height: max-content;
`;

const TodoList = () => {
  const [toDo, setToDo] = useState([]);
  const [id, setID] = useState(1);

  const handleAddToDo = (ref) => {
    const value = ref.current.value;
    const date = new Date().toLocaleString('en-US', {
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    });

    if (value) {
      const toDoItem = { id, title: ref.current.value, favorite: false, date };
      setToDo((todo) => [...todo, toDoItem]);
      setID((id) => id + 1);
    }
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
    <Container>
      <ul>
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
    </Container>
  );
};

export default TodoList;
