import React,{useState} from 'react';
import {Todos} from './Todos';

export function App(){

  const [todos,setTodos] = useState([
    {id:0, text:"Get up early ", done: false,delete:false},
    {id:1, text:"Drink a coffee ", done:false,delete:false},
    {id:2, text:"Make a breakfast", done:false,delete:false}
  ]);

const [newTodo,setNewTodo] = useState("");

function addNewTodo (todo)  {
  let array = {
    id:todo.lenght,
    text:newTodo,
    done:false,
    delete:false,
  };

  setTodos([...todos,array]);
  setNewTodo("");
};

function markTodoAsDone (todo) {
  console.log(todo)
  setTodos([...todos.map(array => (array.id === todo.id) ? {id:array.id,text:array.text,done:!array.done,delete:array.false} : array)
  ])
};

function deleteTodo (todo) {
  let removeArray = todos.splice($index)
    return array.id !== todo.id;
  }
  setTodos (removeArray)



return(
  <div id="app">
    <h2>App</h2>
    <input
    type="text"
    placeholder='Enter New Todo'
    value={newTodo}
    onChange={(event)=>{setNewTodo(event.target.value)}}
    />
    <button onClick={addNewTodo}>Add New Todo</button>
    <Todos todoList={todos} markTodoAsDone={markTodoAsDone} remove={deleteTodo}/>

     

      </div>
)
};