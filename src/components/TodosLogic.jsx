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

  const toggleTodoCompleted = (todoID) => {
    setTodos((prevTodoList) =>
      prevTodoList.map((todoItem) => {
        if (todoItem.id === todoID) {
          return { ...todoItem, completed: !todoItem.completed };
        }
        return todoItem;
      }),
    );
  };

  const deleteTodoItem = (todoID) => {
    setTodos((prevTodoList) =>
      prevTodoList.filter((todoItem) => todoItem.id !== todoID),
    );
  };

  return (
    <div>
      <InputTodo />
      <TodosList
        toggleTodoCompleted={toggleTodoCompleted}
        deleteTodoItem={deleteTodoItem}
        todosProps={todos}
      />
    </div>
  );
};
export default TodosLogic;
