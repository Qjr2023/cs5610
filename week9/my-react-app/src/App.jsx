import React from "react";
import Header from "./components/Header";
import TasksList from "./components/TasksList";

export default function App() {
  
  const appName = "My React App";
  return (
    <div className="appContainer">
      <Header myAppName={appName} version={2} />
      <TasksList />
    </div>
  );
}
