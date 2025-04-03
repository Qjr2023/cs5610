import React from "react";
import { useParams } from "react-router-dom";

const TaskDetail = () => {
  const { taskId } = useParams();  // Access the taskId from the URL
  
  return (
    <div>
      Task Detail for Task ID: {taskId}
    </div>
  );
};

export default TaskDetail;
