import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";

import TodosList from '@/components/TodosList';
import InputTodo from '@/components/InputTodo';

const TodosLogic = () => {
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: uuidv4(),
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: uuidv4(),
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

  const addTodoItem = (title) => {
    const newTodo = { id: uuidv4(), title, completed: false };
    setTodos((prevTodoList) => [newTodo, ...prevTodoList]);
  };

  return (
    <div>
      <InputTodo addTodoItem={addTodoItem} />
      <TodosList
        toggleTodoCompleted={toggleTodoCompleted}
        deleteTodoItem={deleteTodoItem}
        todosProps={todos}
      />
    </div>
  );
};
export default TodosLogic;
