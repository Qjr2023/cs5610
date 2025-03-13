import React from "react";
import Header from "./components/Header";

export default function App() {
  const appName = "My React App";
  return (
    <div>
      <Header myAppName={appName}/>
    </div>
  );
}
