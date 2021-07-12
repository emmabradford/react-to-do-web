import React from 'react';

const Todo = ({todos, deleteTodo}) => {
    const todolist = todos.length? (
        todos.map(todo => {
            return(
                <div className="collection-item" key={todo.id}>
                    <span>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <p className="center">You have no more todos</p>
    )

    return (
        <div className="todos collection">
            {todolist}
        </div>
    )
}

export default Todo;