import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import TasksList from "./components/TasksList";
import TaskDetail from "./components/TaskDetail";
import { NavLink } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import AuthenticationButton from "./components/AuthenticationButton";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import { FaBars, FaTimes } from 'react-icons/fa';

export default function App() {
  const appName = "My React App";
  const [showAddTask, setShowAddTask] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function toggleShowAddTask() {
    setShowAddTask((prev) => !prev);
  }

  return (
    <div className="appContainer">
      <div className="menu-icon" onClick={() => setMenuOpen((prev) => !prev)}>
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {menuOpen || windowWidth > 576 ? (
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/tasks">Tasks</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <AuthenticationButton />
        </nav>
      ) : null}

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
        <Route path="tasks" element={<TasksList />}>
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

