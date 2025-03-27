import React from "react";
import { useParams } from "react-router-dom";

const TaskDetail = () => {
  const { taskId } = useParams();  // Access the taskId from the URL
  
  return (
    <div>
      <h1>Task Detail for Task ID: {taskId}</h1>
      {/* You can now fetch or display the task details using taskId */}
    </div>
  );
};

export default TaskDetail;
