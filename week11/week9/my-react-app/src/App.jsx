import React, { use, useEffect, useState } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import TasksList from "./components/TasksList";
import TaskDetail from "./components/TaskDetail";
import { NavLink } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function App() {
  const appName = "My React App";
  const [showAddTask, setShowAddTask] = useState(false);

  function toggleShowAddTask() {
    setShowAddTask((prev) => !prev);
  }

  return (
    <div className="appContainer">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/tasks">Tasks</NavLink>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header 
                myAppName={appName} 
                version={2}
                onToggleAddTask={toggleShowAddTask}
                showAddTask={showAddTask}
              />
              {showAddTask && <AddTask />}
            </>
          }
        />
        <Route path="tasks" element={<TasksList/>}>
          <Route path=":taskId" element={<TaskDetail />} />
        </Route>
        <Route path="*" element={<h1>This page doesn't exist.</h1>} />
      </Routes>

    </div>
  );
}
