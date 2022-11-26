import { useContext } from 'react';

import { FilterContext } from '../../Todo';
import TodoNavItem from './components/TodoNavItem';
import { ReactComponent as All } from 'icons/todo/item/all.svg';
import { ReactComponent as Today } from 'icons/todo/item/today.svg';
import { ReactComponent as Favorite } from 'icons/todo/item/important.svg';

import styled from 'styled-components';

const TodoNav = () => {
  const { state, dispatch } = useContext(FilterContext);
  const { active } = state;

  return (
    <Nav>
      <ul className='list todo-nav__list'>
        <TodoNavItem text='All' active={active} onClick={() => dispatch({ type: 'All' })}>
          <All />
        </TodoNavItem>
        <TodoNavItem text='Today' active={active} onClick={() => dispatch({ type: 'Today' })}>
          <Today />
        </TodoNavItem>
        <TodoNavItem text='Favorite' active={active} onClick={() => dispatch({ type: 'Favorite' })}>
          <Favorite />
        </TodoNavItem>
      </ul>
    </Nav>
  );
};

const Nav = styled.nav`
  width: 25%;
  margin-right: 5%;
`;

export default TodoNav;
