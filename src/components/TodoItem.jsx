const TodoItem = ({ itemProp, toggleTodoCompleted }) => {
  return (
    <li>
      <input type="checkbox" onChange={() => toggleTodoCompleted(itemProp.id)}/>
      {itemProp.title}
    </li>
  );
};
export default TodoItem;
