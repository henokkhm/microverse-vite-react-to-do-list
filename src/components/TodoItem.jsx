const TodoItem = ({ itemProp, toggleTodoCompleted, deleteTodoItem }) => {
  return (
    <li>
      <input type="checkbox" onChange={() => toggleTodoCompleted(itemProp.id)}/>
      {itemProp.title}
      <button onClick={() => deleteTodoItem(itemProp.id)}>Delete</button>
    </li>
  );
};
export default TodoItem;
