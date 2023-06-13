import { useForm } from "react-hook-form";

const TaskForm = ({ addTask }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    addTask(data);
    reset();
  };

  return (
    <div className="p-4 w-[800px] bg-slate-200 mx-auto shadow-md rounded-md mb-4">
      <h2 className="text-xl mb-4">Add New Task</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700">
            Title:
          </label>
          <input
            type="text"
            id="title"
            className={`w-full px-3 py-2 border ${
              errors.title ? "border-red-500" : "border-gray-400"
            } rounded`}
            {...register("title", { required: "Title is required" })}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700">
            Description:
          </label>
          <textarea
            id="description"
            className={`w-full px-3 py-2 border ${
              errors.description ? "border-red-500" : "border-gray-400"
            } rounded`}
            {...register("description", {
              required: "Description is required",
            })}
          ></textarea>
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
