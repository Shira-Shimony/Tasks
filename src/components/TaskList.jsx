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
    

    const AddTaskList = () =>{
        const NewTask ={
        id: Date.now(),
        name: TName,
        description: TDescraption
        }
        setTask([...tasks,NewTask])

       
       setName("")
       setDescraption("")
    }

const DeleteTask = (idDel) => {
  setTask(tasks.filter((task) => task.id !== idDel));
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
                        <button onClick={()=>DeleteTask(task.id)}>בוצע!</button>


                    </li>
                    
              
                )}
                </ul>
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