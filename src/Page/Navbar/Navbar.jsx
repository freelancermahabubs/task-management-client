import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-white text-xl font-bold">
              Task Manager
            </Link>
          </div>
          <div className="flex items-center">
            <Link
              to="/add-task"
              className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-2xl font-medium"
            >
              Add Task
            </Link>
            <Link
              to="/task-list"
              className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-2xl font-medium"
            >
              Task List
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
