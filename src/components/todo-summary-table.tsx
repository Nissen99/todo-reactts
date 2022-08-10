import { Todo } from "../model/todo";
import { SingleTodoRow } from "./single-todo-row";

type Props = {
  listOfTodos: Todo[];
};

export function TodoSummaryTable({ listOfTodos }: Props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>

      <tbody>
      <tr>
              <td>dummy</td>
              <td>dummy</td>
              <td>dummy</td>
            </tr>
          
        {listOfTodos.map((todo) => (

            <SingleTodoRow id={todo.id} title={todo.title} 
            body={todo.body} />
        ))}
    
      </tbody>
    </table>
  );
}
