import React from 'react'

export default function TasksList() {
    const tasks = [
        {
          id: 1,
          title: "Review week 9 material",
          date: "June 4th at 1 pm",
        },
        {
          id: 2,
          title: "Do quiz 9",
          date: "June 4th at 6 pm",
        },
        {
          id: 3,
          title: "Work on assignment 2",
          date: "June 5th at 8 am",
        },
      ];
  return (
    <div>
        <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <h2>{task.title}</h2>
          </li>
        ))}
      </ul>
    </div>

  )
}
