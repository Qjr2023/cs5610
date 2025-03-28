import React, { useState } from 'react'
import Task from './Task';
import { Outlet } from 'react-router-dom';

export default function TasksList() {
  const [tasksFromServer, setTasksFromServer] = useState([]);
  const [isLoading, setIsLoading] = useState(true);  

  useEffect(() => { 
    let controller = new AbortController();
    const signal = controller.signal;

    async function fetchDate() {
      try{
        // const response = await fetch("http://localhost:5001/tasks", { signle });
        const response = await fetch("http://localhost:3000/api/tasks", {
          signal});
        if (response.ok) {
          const data = await response.json();
          setTasksFromServer(data); 
          setIsLoading(false);
          console.log("fetchData ", data);
        } else {
          throw new Error("fetch failed");
        }
      } catch (error) {
        console.log("fetchData", error);
      }
    }
    fetchDate();
    return () => {
      console.log("cleanup");
      controller.abort();
    };
  }, []);

  const navigate = useNavigate();
  async function deleteTask(deletedId) {
    console.log("Delete pressed", deletedId);
    try{
      const response = await fetch("http://localhost:3000/api/tasks/" + deletedId, {
        method: "DELETE",
      });
      if (response.ok) {
        const newArray = tasksFromServer.filter((task) => {
          return task._id !== deletedId;
        });
        setTasksFromServer(newArray);
        navigate("/tasks");
      }
    } catch (err) {
      console.log("deleteTask ", err);
    }
  }
  
  
    return (
      <>
        {isLoading ? (
          <p> Loading</p>
        ) : tasksFromServer.length === 0 ? (
          <p>No tasks left</p>
          ) : (
            <ul>
            {tasksFromServer.map((task) => {
            return <Task key={task._id} taskObj={task} onDelete={deleteTask} />;
          })}
          </ul>
      )}
      <Outlet />
    </>
  );
}