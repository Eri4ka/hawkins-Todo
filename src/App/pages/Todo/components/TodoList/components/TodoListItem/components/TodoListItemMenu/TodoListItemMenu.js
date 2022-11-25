import { forwardRef } from 'react';

import { baseTheme } from 'styles/theme';
import styled from 'styled-components';

const TodoListItemMenu = forwardRef(({ handleDeleteToDo, handleFavorite }, ref) => {
  return (
    <StyledMenu ref={ref} className='list todo-menu'>
      <StyledMenuItem className='todo-menu__item' onClick={handleFavorite}>
        Favorite
      </StyledMenuItem>
      <StyledMenuItem className='todo-menu__item' onClick={handleDeleteToDo}>
        Delete
      </StyledMenuItem>
    </StyledMenu>
  );
});

const StyledMenu = styled.ul`
  position: absolute;
  top: 25px;
  right: 10px;
  background-color: ${baseTheme.colors.white};
  box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  z-index: 1;
`;

const StyledMenuItem = styled.li`
  padding: 8px;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    color: ${baseTheme.colors.purple};
  }
`;

export default TodoListItemMenu;
