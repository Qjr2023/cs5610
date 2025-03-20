import React, { useState } from 'react'
import Task from './Task';

export default function TasksList( {tasks} ) {
    // const [tasks, setTasks] = useState([])
    // //     [
    //         {
    //           id: 1,
    //           title: "Review week 9 material",
    //           date: "June 4th at 1 pm",
    //         },
    //         {
    //           id: 2,
    //           title: "Do quiz 9",
    //           date: "June 4th at 6 pm",
    //         },
    //         {
    //           id: 3,
    //           title: "Work on assignment 2",
    //           date: "June 5th at 8 am",
    //         },
    //     ]);
    
    // setTasks([]);
    // console.log(tasks);

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
          <p>No tasks</p>
        ) : (
          tasks.map((task) => (
            <Task key={task.id} taskObj={task} onDelete={deleteTask} />
          ))
        )}
      </ul>
    );
}
