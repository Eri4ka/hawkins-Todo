import TodoNavItem from './components/TodoNavItem';
import { ReactComponent as All } from 'icons/todo/item/all.svg';
import { ReactComponent as Today } from 'icons/todo/item/today.svg';
import { ReactComponent as Favorite } from 'icons/todo/item/important.svg';

import styled from 'styled-components';
import { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'Today':
      return { active: (state.active = 'Today') };
    case 'Favorite':
      return { active: (state.active = 'Favorite') };
    default:
      return { active: (state.active = 'All') };
  }
};

const TodoNav = () => {
  const [state, dispatch] = useReducer(reducer, { active: 'All' });

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
