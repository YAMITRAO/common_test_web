import { IoHome } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { VscDebug } from "react-icons/vsc";
import { IoSettingsOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600">
      <div className=" h-full w-full  flex items-center mx-auto ">
        {/* debug button */}
        <NavLink
          to="/test"
          title="debug"
          className="flex h-full w-full items-center justify-center px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <span className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 text-2xl">
            <VscDebug />
          </span>
        </NavLink>

        {/* home */}
        <div className="flex h-full w-full items-center justify-center">
          <NavLink
            to="/"
            title="home"
            className="inline-flex items-center justify-center w-10 h-10 font-medium bg-blue-600 rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
          >
            <span className=" text-gray-200 dark:text-gray-200 hover:text-white text-xl">
              <IoHome />
            </span>
          </NavLink>
        </div>

        {/* setting */}
        <NavLink
          to="/setting"
          title="setting"
          className="flex w-full h-full items-center justify-center px-5 rounded-e-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <span className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 text-[28px]">
            <IoSettingsOutline />
          </span>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
