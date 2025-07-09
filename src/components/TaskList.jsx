import { useState } from "react"

const TaskList = () => {


    const [tasks, setTask] = useState([
        {
            id: 1,
            name: 'clean',
            description: 'bla',

        },
        {
            id: 3,
            name: 'orgenize',
            description: 'bla',


        },
        {
            id: 4,
            name: 'wash',
            description: 'bla',


        }
    ])

    const [TName,setName] = useState("")
    const [TDescraption,setDescraption] = useState("")


    return (
        <div>
            <ul>
                {tasks.map((task) =>
                    <li key={task.id}>
                        <div>
                            {task.name}
                        </div>
                        <div>
                            {task.description}
                        </div>


                    </li>
              
                )}
                <input
                
                
                />
            </ul>
            <button onClick={()=>{}}>
                משימה חדשה
            </button>


        </div>
    )
}

export default TaskList