import { Todo } from "../model/todo"

type Props = {
    id: string;
    title: string;
    body: string;
};

export function SingleTodoRow({id, title, body}: Props) {


    return(
        
            <tr>
              <td>{id}</td>
              <td>{title}</td>
              <td>{body}</td>
            </tr>
          
    )
}