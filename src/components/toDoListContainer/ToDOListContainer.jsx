import React, { useEffect, useState } from 'react'
import ToDoListItem from '../toDoListItem/ToDoListItem'

const ToDOListContainer = () => {
    const [todo, setTodo] = useState({
        todo_task: "",
    });
    
    const [todoContainer, setTodoContainer] = useState([]);

    const createNewTodo = () => {
        setTodoContainer([...todoContainer, todo]);
    };

    const deleteTodo = (id) => {
        const updateTodo = todoContainer.filter((data, index) => index != id);
        setTodoContainer(updateTodo);
        localStorage.setItem("todo", JSON.stringify(updateTodo));
        console.log("todo", id);
    };

    useEffect(() => {
        const myTodo = JSON.parse(localStorage.getItem("todo"));
        if (myTodo) {
            setTodoContainer(myTodo);
        }
    }, []);
    
    useEffect(() => {
        localStorage.setItem("todo", JSON.stringify(todoContainer));
    }, [todoContainer]);

  return (
    <>
        <div className='toDo_container'>
            <h2 className='title'>To-Do List</h2>
            <div className='form'>
                <div className="form-group">
                    <label className='label' htmlFor='toDoName'>Todo name</label>
                    <input type='text' name='toDoName' id='toDoName' placeholder='Todo Name Here ...' onChange={(e) => setTodo({ todo_task: e.target.value })} />
                    <button className='butn' onClick={createNewTodo }>Create new Todo</button>
                </div>
            </div>
        </div>

        <div className="toDoBox">
            {todoContainer.map((todo , index) =>  (
                <ToDoListItem key={index} todo={todo} deleteTodo={deleteTodo} id={index}/> 
            ))}   
        </div>
    </>

  )
}

export default ToDOListContainer
