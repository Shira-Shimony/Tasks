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

    const [Tid,setId] = useState("")
    const [TName,setName] = useState("")
    const [TDescraption,setDescraption] = useState("")
    

    const AddTaskList = () =>{
        const NewTask ={
        id : Number(Tid),
        name: TName,
        description: TDescraption
        }
        setTask([...tasks,NewTask])

       setId("")
       setName("")
       setDescraption("")
    }

   
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
                </ul>
                <input
                type = "number"
                value= {Tid}
                onChange={(e)=>setId(e.target.value)}
                />
                <input
                type="text"
                value = {TName}
                onChange={(e) =>setName(e.target.value)}
                
                />
                <input
                type= "text"
                value= {TDescraption}
                onChange={(e)=>setDescraption(e.target.value)}
                
                />
                
                
            
            <button onClick={AddTaskList}>משימה חדשה </button>

               


        </div>
    )
}

export default TaskList