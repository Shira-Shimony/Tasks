import { useState } from "react";

const TaskList = () => {
  const [tasks, setTask] = useState([
    { id: 1, name: "clean", description: "bla" },
    { id: 3, name: "orgenize", description: "bla" },
    { id: 4, name: "wash", description: "bla" },
  ]);

  const [TName, setName] = useState("");
  const [TDescraption, setDescraption] = useState("");
  const [editId, setEditId] = useState("");

  const AddTaskList = () => {
    const NewTask = {
      id: Date.now(),
      name: TName,
      description: TDescraption,
    };
    setTask([...tasks, NewTask]);
    setName("");
    setDescraption("");
  };

  const DeleteTask = (idDel) => {
    setTask(tasks.filter((task) => task.id !== idDel));
  };

  const updteTask = (idUp) => {
    const idUpdate = tasks.find((task) => task.id === idUp);
    if (idUpdate) {
      setName(idUpdate.name);
      setDescraption(idUpdate.description);
      setEditId(idUp);
    }
  };

  const saveUpdatedTask = () => {
    setTask(
      tasks.map((task) => {
        if (task.id === editId) {
          return { ...task, name: TName, description: TDescraption };
        } else {
          return task;
        }
      })
    );
    setEditId("");
    setName("");
    setDescraption("");
  };


  let buttonSave;
  if (editId) {
    buttonSave = <button onClick={saveUpdatedTask}>שמור</button>;
  } else {
    buttonSave = <button onClick={AddTaskList}>משימה חדשה</button>;
  }

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <div>{task.name}</div>
            <div>{task.description}</div>
            <button onClick={() => DeleteTask(task.id)}>מחיקה</button>
            <button onClick={() => updteTask(task.id)}>עדכון</button>
          </li>
        ))}
      </ul>

      <input
        type="text"
        value={TName}
        onChange={(e) => setName(e.target.value)}
        placeholder="שם משימה"
      />
      <input
        type="text"
        value={TDescraption}
        onChange={(e) => setDescraption(e.target.value)}
        placeholder="תיאור משימה"
      />

      {buttonSave}
    </div>
  );
};

export default TaskList;
