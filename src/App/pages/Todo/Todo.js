import { useReducer, createContext } from 'react';

import TodoList from './components/TodoList';
import TodoNav from './components/TodoNav';
import { activeFilterReducer } from 'reducers';

import styled from 'styled-components';

export const FilterContext = createContext();

const Todo = () => {
  const [state, dispatch] = useReducer(activeFilterReducer, { active: 'All' });
  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      <Container>
        <TodoNav />
        <TodoList />
      </Container>
    </FilterContext.Provider>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 23px;
`;

export default Todo;
