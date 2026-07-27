import TodoItem from "./TodoItem";

function TodoList() {

  const todos = [
    "Learn React",
    "Learn Webpack",
    "Build Project"
  ];

  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem key={index} text={todo} />
      ))}
    </ul>
  );
}

export default TodoList;