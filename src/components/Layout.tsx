import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="w-full h-full overflow-hidden flex flex-col bg-slate-200 dark:bg-slate-700">
      {/* nav  */}
      <div className="w-full h-fit">
        <Navbar />
      </div>
      {/* main container */}
      <main className="w-full h-full ">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
