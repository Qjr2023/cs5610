import React, { PureComponent } from 'react'

export default function Header({ myAppName, onToggleAddTask, showAddTask }) {
  // console.log(myAppName);
    return (
      <div>
        <header className='headerContainer'>
          <h1>Welcome to {myAppName}</h1>
          <button onClick={onToggleAddTask}>
            {showAddTask ? "Close Form" : "Add a Task"}
          </button>
        </header>
      </div>
    )
  }
