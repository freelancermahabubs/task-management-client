import axios from "axios";
import Swal from "sweetalert2";
import useTask from "../../hooks/useTask";
const TaskList = () => {
  const [tasks, refetch] = useTask();
  console.log(tasks);

  const updateTaskStatus = async (taskId, completed) => {
    try {
      const confirmed = await Swal.fire({
        title: "Are you sure?",
        text: "Do you want to update the task status?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, update it!",
      });

      if (confirmed.isConfirmed) {
        await axios.put(
          `${import.meta.env.VITE_API_URL}/update-tasks/${taskId}`,
          {
            completed,
          }
        );
        refetch();

        Swal.fire(
          "Task Updated",
          "The task status has been updated.",
          "success"
        );
      }
    } catch (error) {
      console.error("Error updating task:", error);
      Swal.fire("Error", "An error occurred while updating the task.", "error");
    }
  };

  const deleteTask = (taskId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${import.meta.env.VITE_API_URL}/delete-tasks/${taskId}`)
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire(
                "Task Deleted",
                "The task has been deleted.",
                "success"
              );
            }
          });
      }
    });
  };
  return (
    <div>
      <h2 className="text-4xl font-bold  text-center mt-8 mb-4">Task List</h2>
      {tasks.length === 0 ? (
        <p className="text-center text-2xl text-red-600 mt-40">
          No tasks found.
        </p>
      ) : (
        <table className="w-[80%] shadow-xl mx-auto">
          <thead className="text-end">
            <tr>
              <th className="py-2">Title</th>
              <th className="py-2">Description</th>
              <th className="py-2">Status</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task._id} className="border-b text-end">
                <td className="py-2">{task.title}</td>
                <td className="py-2">{task.description}</td>
                <td className={`py-2   ${task.completed ? "" : ""}`}>
                  {task.completed ? "Completed" : "Pending"}
                </td>
                <td className="py-2">
                  <button
                    className={`px-2 py-1 text-sm rounded ${
                      task.completed
                        ? "bg-gray-400 text-gray-700"
                        : "bg-green-500 text-white"
                    }`}
                    disabled={task.completed} // Add disabled attribute conditionally
                    onClick={() => updateTaskStatus(task._id, !task.completed)}
                  >
                    {task.completed ? "Completed" : "Mark Completed"}
                  </button>
                  <button
                    className="px-2 py-1 text-sm rounded bg-red-500 text-white ml-2"
                    onClick={() => deleteTask(task._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TaskList;
