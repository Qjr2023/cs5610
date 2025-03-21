import React from 'react'
import { IoTrashOutline } from "react-icons/io5";
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
            <p>{taskObj.title}</p>
            <IoTrashOutline onClick={deletePressed}/>
          </div>
          <p>{taskObj.date}</p>
        </div>
    </li>
  )
}
