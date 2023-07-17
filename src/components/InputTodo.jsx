import { useState } from 'react';

const InputTodo = ({ addTodoItem }) => {
  const [todoInput, setTodoInput] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTodoItem(todoInput);
    setTodoInput('');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Add Todo..."
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
};
export default InputTodo;
