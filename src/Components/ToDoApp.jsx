import { useState } from "react";

const ToDoApp = () => {
  // const randomId = () => {
  //   return Math.floor(Math.random() * 4000);
  // };

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([
    { name: "Smieci", isCompleted: false },
    { name: "Naczynia", isCompleted: false },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    setTasks(() => [...tasks, { name: task, isCompleted: false }]);
    setTask("");
  };

  const completeTask = (e) => {
    console.log(e.target.closest("li"));
    // tasks.map((task) => task);
  };

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            value={task}
            onChange={handleChange}
            placeholder="new task"
          />
        </label>
        <button type="submit">Add task</button>
      </form>
      <ul>
        {tasks.map((task, i) => {
          return (
            <li key={i}>
              {task.name} <button onClick={completeTask}>Complete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { ToDoApp };
