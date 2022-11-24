import TodoList from './components/TodoList';
import TodoNav from './components/TodoNav';

import './Todo.scss';

const Todo = () => {
  return (
    <div className='todo'>
      <TodoNav />
      <TodoList />
    </div>
  );
};

export default Todo;
