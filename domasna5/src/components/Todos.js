import React from 'react';

export const Todos = ({todoList,addNewTodo,setTodos,markTodoAsDone,deleteTodo,}) =>{

    return(
        <div id="todo"> 
       <h3>Todo List</h3>
       {todoList.length < 1 ? <p>empty array</p> :
        <ol>
            {todoList.map((array)=>{
                return(
                    <li key={array.id}>
                        <input
                        name={array.id}
                        type="text"
                        value={array.text}
                        onChange={(event)=>{array.text= event.target.value}
                        <input
                        type="checkbox"
                        value={array.done}
                        checked={array.done}
                        onChange={()=>{markTodoAsDone(array)}}
                        />
                        <input
                        type="submit"
                        value="Delete"
                        onClick={()=>{
                            checkDel(array)
                        }}
                        />
                    </li>
                )
                      })}
        </ol>
        
        </div>
    )
                    }


   
                