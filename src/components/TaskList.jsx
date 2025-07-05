import React from 'react'

const TaskList = () => {
    let tasks = [{
        id: 1,
        name: 'clean',
        description: 'bla',

    },
    {
        id: 2,
        name: 'wash',
        description: 'bla',
    },
    {
        id: 3,
        name: 'orgenize',
        description: 'bla',
    }]
    return (
        <div>
            <ul>
                {tasks.map((task) =>
                    <li key={task.id}>
                        {task.name}
                    </li>

                )}
            </ul>


        </div>
    )
}

export default TaskList