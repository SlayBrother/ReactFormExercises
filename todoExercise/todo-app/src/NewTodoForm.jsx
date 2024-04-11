import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

function NewTodoForm({createTodo}) {
    const [task, setTask] = useState("");


    const handleChange = evt => {
        setTask(evt.target.value)
    }

    const gatherInput = evt => {
        evt.preventDefault()
        createTodo({task, id:uuid() })
        setTask("")
    };

    return (
        <div>
            <form onSubmit={gatherInput}>
                <label HTMLfor="task">Task:</label>
                <input
                    id="task"
                    name="task"
                    type="text"
                    onChange={handleChange}
                    value={task}
                />
                <button>Add a Todo!</button>
            </form>
        </div>
    )

}

export default NewTodoForm;