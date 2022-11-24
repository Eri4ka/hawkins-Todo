import { useRef } from 'react';

import { ReactComponent as AddIc } from 'icons/todo/add.svg';

import './TodoAdd.scss';

const TodoAdd = ({ handleAddToDo }) => {
  const inputRef = useRef();

  return (
    <div className='todo-list-add'>
      <input ref={inputRef} type='text' className='todo-list-add__input' />
      <button onClick={() => handleAddToDo(inputRef)} className='todo-list-add__button'>
        <AddIc />
      </button>
    </div>
  );
};

export default TodoAdd;
