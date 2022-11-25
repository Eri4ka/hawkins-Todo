import TodoList from './components/TodoList';
import TodoNav from './components/TodoNav';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 23px;
`;

const Todo = () => {
  return (
    <Container>
      <TodoNav />
      <TodoList />
    </Container>
  );
};

export default Todo;
