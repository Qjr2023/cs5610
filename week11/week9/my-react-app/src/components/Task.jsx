import React from 'react'
import { IoTrashOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

export default function Task({ taskObj, onDelete }) {
  function deletePressed() {
    // console.log("Delete pressed");
    // Add code to delete task
    const idToDelete = taskObj._id;
    onDelete(idToDelete);
  }
  return (
    <li>
        <div className="classContainer">
          <div className="taskIconContainer">
            <NavLink to={`/tasks/${taskObj._id}`}>
              {taskObj.title}
            </NavLink>
            <IoTrashOutline onClick={deletePressed}/>
          </div>
          <p>{taskObj.date}</p>
        </div>
    </li>
  )
}
