import React, { use, useEffect, useState } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import TasksList from "./components/TasksList";
import TaskDetail from "./components/TaskDetail";
import { NavLink } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import AuthenticationButton from "./components/AuthenticationButton";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";

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
        <NavLink to="/profile">Profile</NavLink>
        <AuthenticationButton /> 
        {/* <LoginButton />
        <LogoutButton /> */}
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
        <Route
          path="/profile"
          element={<ProtectedRoute component={Profile} />}
        />
        <Route path="*" element={<h1>This page doesn't exist.</h1>} />
      </Routes>

    </div>
  );
}
