import React, { useState } from 'react'
import Task from './Task';

export default function TasksList( {tasks} ) {

    async function deleteTask(deletedId) {
      console.log("Delete pressed", deletedId);
      try{
        await fetch("http://localhost:5001/tasks/" + deletedId, {
          method: "DELETE",
        });
      } catch (error) {
        console.log("deleteTask", error);
      }

      // const newArray = tasks.filter((task) => task.id !== deletedId);
      // setTasks(newArray);
    }
  
    return (
      <ul>
        {tasks.length === 0 ? (
          <li>No tasks left</li>
        ) : (
          tasks.map((task) => (
            <Task key={task.id} taskObj={task} onDelete={deleteTask} />
          ))
        )}
      </ul>
    );
}
