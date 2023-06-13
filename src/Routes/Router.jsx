import { createBrowserRouter } from "react-router-dom";

import Home from "../Page/Home/Home";
import Main from "../Layout/Main";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import TaskManager from "../Page/TaskManager/TaskManager";
import TaskList from "../Page/TaskList/TaskList";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add-task",
        element: <TaskManager />,
      },
      {
        path: "/task-list",
        element: <TaskList />,
      },
    ],
  },
]);
export default router;
