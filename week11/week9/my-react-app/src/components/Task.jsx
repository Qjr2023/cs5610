import React from 'react'
import { IoTrashOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

export default function Task({ taskObj, onDelete }) {
  function deletePressed() {
    // console.log("Delete pressed");
    // Add code to delete task
    onDelete(taskObj.id);
  }
  return (
    <li >
        <div className="classContainer">
          <div className="taskIconContainer">
            <NavLink to={`/tasks/${taskObj.id}`}>{taskObj.title}</NavLink>
            <IoTrashOutline onClick={deletePressed}/>
          </div>
          <p>{taskObj.date}</p>
        </div>
    </li>
  )
}
