import React, { useEffect, useState } from "react";
import Task from "./Task";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

export default function TasksList() {
  const [tasksFromServer, setTasksFromServer] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    // create an AbortController instance
    const controller = new AbortController();
    const signal = controller.signal;
    
    async function fetchData() {
      setIsLoading(true);
      setError(null);
      
      try {
        const response = await fetch("http://localhost:3000/api/tasks", {
          signal,
        });
        
        if (response.ok) {
          const data = await response.json();
          setTasksFromServer(data);
          console.log("fetchData success:", data);
        } else {
          throw new Error("Fetch failed with status: " + response.status);
        }
      } catch (err) {
        // only log the error if it's not an AbortError
        if (err.name !== 'AbortError') {
          console.error("fetchData error:", err);
          setError(err.message);
        } else {
          console.log("Fetch aborted");
        }
      } finally {
        // whatever happens, we want to set loading to false
        if (!signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    fetchData();

    // cleanup function to abort the fetch request
    return () => {
      console.log("Cleaning up and aborting fetch");
      controller.abort();
    };
  }, [location.pathname]); // added location.pathname to the dependency array

  const navigate = useNavigate();

  async function deleteTask(deletedId) {
    try {
      const response = await fetch(
        `http://localhost:3000/api/tasks/${deletedId}`,
        {
          method: "DELETE",
        }
      );
      
      if (response.ok) {
        const newArray = tasksFromServer.filter((task) => {
          return task._id !== deletedId;
        });
        setTasksFromServer(newArray);
        navigate("/tasks");
      } else {
        throw new Error(`Delete failed with status: ${response.status}`);
      }
    } catch (err) {
      console.error("deleteTask error:", err);
    }
  }

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
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