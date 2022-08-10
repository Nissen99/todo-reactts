import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoCreate } from './components/todo-create';
import { TodoSummaryTable } from './components/todo-summary-table';
import { Todo } from './model/todo';

function App() {

  const todos:Todo[] = [];

  //SIDEEFFECT = Changes the list, but i want to add to list? 
  const addTodo = (listoftodos:Todo[], todoTitle:string, todoBody:string)
   : Todo[] => {

    const newTodo:Todo = {id: (Math.random()*100).toString() ,title:todoTitle, body: todoBody}; 
    listoftodos.push(newTodo);
    return(
        listoftodos
      )
    
  }

  return (
    
    <div className="App">
    <TodoCreate listofTodos={todos} addTodo={addTodo} />
    <TodoSummaryTable listOfTodos={todos}/>
    </div>
  );
}

export default App;
