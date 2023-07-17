import TodoItem from '@/components/TodoItem';

const TodosList = ({ todosProps, ...rest }) => {
  return (
    <ul>
      {todosProps.map((todo) => (
        <TodoItem key={todo.id} itemProp={todo} {...rest}/>
      ))}
    </ul>
  );
};
export default TodosList;
