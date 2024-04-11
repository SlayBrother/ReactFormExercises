import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

function TodoList() {
    const [todos, setTodos] = useState([])

    const create = newTodo => {
        setTodos(todos => [...todos, newTodo])
    }

    const update = (id, updateTask) => {
        setTodos(todos =>
            todos.map(todo =>
                todo.id === id ? {...todo, task: updateTask} : todo
            )
        )
    }

    const remove = id => {
        setTodos(todos => todos.filter(todo => todo.id !== id))
    }

    const todoComponents = todos.map(todo => (
        <Todo
            remove={remove}
            key={todo.id}
            id={todo.id}
            task={todo.task}
            update={update}
        />
    ))

    return (
        <div>
            <NewTodoForm createTodo={create} />
            <ul>{todoComponents}</ul>
        </div>
    )
}

export default TodoList