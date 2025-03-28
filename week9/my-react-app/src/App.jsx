import React, { use, useEffect, useState } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import TasksList from "./components/TasksList";

export default function App() {
  const appName = "My React App";
  const [tasksFromServer, setTasksFromServer] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);

  async function fetchDate() {
    try{
      const response = await fetch("http://localhost:5001/tasks");
      if (response.ok) {
        const data = await response.json();
        setTasksFromServer(data); 
      } else {
        throw new Error("fetch failed");
      }
    } catch (error) {
      console.log("fetchData", error);
    }
    
} 
  useEffect(() => { 
    fetchDate();
  }, []);

  function toggleShowAddTask() {
    setShowAddTask((prev) => !prev);
  }

  return (
    <div className="appContainer">
      <Header 
      myAppName={appName} 
      version={2}
      onToggleAddTask={toggleShowAddTask}
      showAddTask={showAddTask}
       />
      {showAddTask && <AddTask />}
      <TasksList tasks={tasksFromServer}/>
    </div>
  );
}
