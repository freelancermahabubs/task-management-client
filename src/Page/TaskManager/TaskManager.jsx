import axios from "axios";
// import { useState, useEffect } from "react";
import TaskForm from "../../components/Form/TaskForm";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useTask from "../../hooks/useTask";

const TaskManager = () => {
  const [tasks, refetch] = useTask();
  console.log(tasks);

  const addTask = (task) => {
    try {
      axios.post(`${import.meta.env.VITE_API_URL}/add-tasks`, task);
      refetch();
      Swal.fire("Task Added", "The task has been added.", "success");
    } catch (error) {
      console.error("Error adding task:", error);
      Swal.fire("Error", "An error occurred while adding the task.", "error");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Task Manager</h1>
      <TaskForm addTask={addTask} />
    </div>
  );
};

export default TaskManager;
