import React from 'react'

const ToDoListItem = ({todo , id , deleteTodo}) => {
    return (
        <div className='toDo_item'>
            <h6 className='toDoTitle'> {todo.todo_task}</h6>
            <button className='del_butn' onClick={() => deleteTodo(id)} >Delete</button>
        </div>
    )
}

export default ToDoListItem
