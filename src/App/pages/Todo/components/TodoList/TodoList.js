import { useState, useContext, useEffect } from 'react';

import TodoListItem from './components/TodoListItem';
import TodoAdd from './components/TodoAdd';

import { baseTheme } from 'styles/theme';
import styled from 'styled-components';
import { FilterContext } from '../../Todo';

const Container = styled.div`
  width: 70%;
  background-color: ${baseTheme.colors.white};
  border-radius: 10px;
  padding: 18px 16px;
  height: max-content;
`;

const TodoList = () => {
  const [toDo, setToDo] = useState([]);
  const [filteredToDo, setFilteredToDO] = useState(toDo);
  const [id, setID] = useState(1);
  const date = new Date();
  const { state } = useContext(FilterContext);

  useEffect(() => {
    switch (state.active) {
      case 'Favorite':
        return setFilteredToDO(toDo.filter((item) => item.favorite));
      case 'Today':
        const currentDate = date.toDateString();
        return setFilteredToDO(toDo.filter((item) => item.date.toDateString() === currentDate));
      default:
        return setFilteredToDO(toDo);
    }
  }, [state, toDo]);

  const handleAddToDo = (ref) => {
    const value = ref.current.value;

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
        {filteredToDo.map((todo) => (
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
