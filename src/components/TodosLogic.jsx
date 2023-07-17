import { useState } from 'react';

import TodosList from '@/components/TodosList';
import InputTodo from '@/components/InputTodo';

const TodosLogic = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: 2,
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: 3,
      title: 'Deploy to live server',
      completed: false,
    },
  ]);
  return (
    <div>
      <InputTodo />
      <TodosList todosProps={todos} />
    </div>
  );
};
export default TodosLogic;
