import { useState } from "react";
import { RiRemoteControlLine } from "react-icons/ri";

const SettingCard = () => {
  const [selectedState, setSelectedState] = useState("operations");
  console.log("SelectedState", selectedState);
  return (
    <div className="m-2 mx-auto w-full min-w-[300px] max-w-[400px]  bg-white border border-gray-300 rounded-md shadow dark:bg-gray-800 dark:border-gray-400 ">
      {/* top buttons */}
      <ul className=" text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-md flex dark:divide-gray-600 dark:text-gray-400 rtl:divide-x-reverse">
        <li className="w-full">
          <button
            type="button"
            style={{
              background: selectedState == "operations" ? "#6c584c" : "",
              color: selectedState == "operations" ? "white" : "",
            }}
            className=" w-full p-2 rounded-ss-md bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 flex justify-center items-center gap-2"
            onClick={() => setSelectedState("operations")}
          >
            <span className="text-xl">
              <RiRemoteControlLine />
            </span>
            Operations
          </button>
        </li>
      </ul>

      {/* card body */}
      <div
        id="fullWidthTabContent"
        className="border-t border-gray-200 dark:border-gray-600"
      >
        <div className="p-2  w-full dark:text-slate-200 rounded-b-md ">
          {/* first control */}
          <div className="w-full flex flex-col gap-2  justify-between border-b border-dashed  py-2">
            {/* heading */}
            <div className="w-full text-center mb-2 text-lg font-mono ">
              {" "}
              Heading
            </div>
            {/* name and value -1 first control */}
            <div className="w-full flex justify-between ">
              {/* name */}
              <div className="w-full bg-slate-600 rounded text-center truncate text-slate-200 mr-2 text-wrap flex justify-center items-center">
                1
              </div>
              {/* divider */}
              <div className="w-fit border-r border-dashed"></div>
              {/* value */}
              <div className="w-full ml-2 bg-transpaernt rounded-r text-center truncate dark:text-slate-200 text-slate-700 pt-2">
                {/* button */}
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none  peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  {/* <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Toggle me
                  </span> */}
                </label>
              </div>
            </div>

            {/* name and value -2 first control */}
            <div className="w-full flex justify-between ">
              {/* name */}
              <div className="w-full bg-slate-600 rounded-l text-center truncate text-slate-200 mr-2 ">
                1
              </div>
              {/* divider */}
              <div className="w-fit border-r border-dashed"></div>
              {/* value */}
              <div className="w-full ml-2 bg-slate-400 rounded-r text-center truncate text-slate-800">
                2
              </div>
            </div>
          </div>
          {/* second control */}
          <div className="w-full flex flex-col  justify-between border-b border-dashed  py-2">
            <div className="w-full text-center mb-4 text-lg font-mono ">
              {" "}
              Heading
            </div>
            <div className="w-full flex justify-between mx-2">
              {/* name */}
              <div className="w-full bg-slate-600 rounded-l text-center truncate text-slate-200">
                1
              </div>
              {/* value */}
              <div className="w-full bg-slate-400 rounded-r text-center truncate text-slate-800">
                2
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingCard;
