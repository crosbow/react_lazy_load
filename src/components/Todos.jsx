import { use } from "react";
import { fetchData } from "../utils/fetchData";

const Todos = () => {
  const todos = use(fetchData("https://jsonplaceholder.typicode.com/todos"));
  //   console.log(todos);

  return (
    <ul>
      <h2 className="text-2xl mb-2 font-bold mt-5">Todos</h2>
      {todos.map((todo) => (
        <li key={todo.id}> {todo.title} </li>
      ))}
    </ul>
  );
};
export default Todos;
