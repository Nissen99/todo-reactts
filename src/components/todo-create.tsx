import { Todo } from "../model/todo";

type Props = {
    listofTodos:Todo[];
    addTodo(listoftodos: Todo[], todoTitle:string, todoBody:string): Todo[];
};

export function TodoCreate({listofTodos, addTodo}:Props ){
    let todoTitle:string = "";
    let todoBody:string = "";
return(
    <form onSubmit={(e) => {
        addTodo(listofTodos, todoTitle, todoBody)
    }}>
    <input type='text' placeholder="Todo title....." 
    onChange={(e) => {
        todoTitle=e.target.value;
    }}
    ></input>
<br/>
    <input  type='text' placeholder="todo body.... "
     onChange={(e) => {
        todoBody=e.target.value;
    }}
    ></input>
<br/>

    <button type="submit">Submit Todo</button>

    </form>
    )
}