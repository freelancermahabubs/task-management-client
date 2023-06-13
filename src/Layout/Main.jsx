import { Outlet } from "react-router-dom";
import Navbar from "../Page/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Main;
