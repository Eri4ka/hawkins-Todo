import { forwardRef } from 'react';

import './TodoListItemMenu.scss';

const TodoListItemMenu = forwardRef(({ handleDeleteToDo, handleFavorite }, ref) => {
  return (
    <ul ref={ref} className='list todo-menu'>
      <li className='todo-menu__item' onClick={handleFavorite}>
        Favorite
      </li>
      <li className='todo-menu__item' onClick={handleDeleteToDo}>
        Delete
      </li>
    </ul>
  );
});

export default TodoListItemMenu;
