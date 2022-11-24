import { usePopup } from 'hooks/usePopup';

import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ReactComponent as DotsIc } from 'icons/todo/dots.svg';
import TodoListItemMenu from './components/TodoListItemMenu';

import './TodoListItem.scss';

const TodoListItem = ({ toDo, handleDeleteToDo, handleToggleFavorite }) => {
  const { id, title, favorite } = toDo;
  const { open, setOpen, popupRef, triggerRef } = usePopup();

  const handleFavorite = () => {
    handleToggleFavorite(id);
    setOpen(false);
  };

  return (
    <li key={id} className='todo-list-item'>
      {title}
      <div className='todo-list-item__badges'>
        {favorite && <FontAwesomeIcon icon={faStar} className='todo-list-item__icon' />}
        <DotsIc ref={triggerRef} className='todo-list-item__icon' />
      </div>
      {open && (
        <TodoListItemMenu
          ref={popupRef}
          handleDeleteToDo={() => handleDeleteToDo(id)}
          handleFavorite={handleFavorite}
        />
      )}
    </li>
  );
};

export default TodoListItem;
