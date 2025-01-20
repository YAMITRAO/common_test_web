import { useState } from "react";
import { HiAnnotation } from "react-icons/hi";
import { ImStatsBars } from "react-icons/im";
import { RiRemoteControlLine } from "react-icons/ri";

const Card = () => {
  const [selectedState, setSelectedState] = useState("operations");
  console.log("SelectedState", selectedState);
  return (
    <div className="m-2 mx-auto w-full min-w-[300px] max-w-[400px]  bg-white border border-gray-300 rounded-md shadow dark:bg-gray-800 dark:border-gray-400 ">
      {/* top buttons */}
      {true && (
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
          <li className="w-full">
            <button
              type="button"
              style={{
                background: selectedState == "statistics" ? "#6c584c" : "",
                color: selectedState == "statistics" ? "white" : "",
              }}
              className=" w-full p-2 bg-gray-50 rounded-tr-md hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 flex justify-center items-center gap-2"
              onClick={() => setSelectedState("statistics")}
            >
              <span className="text-xl">
                <ImStatsBars />
              </span>
              Statistics
            </button>
          </li>
        </ul>
      )}
      {/* card body */}
      <div
        id="fullWidthTabContent"
        className="border-t border-gray-200 dark:border-gray-600"
      >
        {selectedState == "operations" ? (
          <div className="p-2  w-full dark:text-slate-200 rounded-b-md ">
            {/* name and status bar */}
            <div className="w-full flex h-fit items-center justify-between border-b pb-4 border-dashed ">
              {/* name */}
              <div className="w-fit overflow-hidden flex items-center gap-1 text-lg font-mono font-medium">
                {" "}
                <span className="w-fit flex text-2xl">
                  <HiAnnotation />
                </span>
                <span className="w-full truncate capitalize font-bold">
                  test Name fhfghfghh fghfghhfghfg fghfg
                </span>
              </div>
              {/*  status */}
              <div className="w-fit ml-4 flex justify-end">
                {/* comp  */}
                {true ? (
                  <div className="relative inline-flex items-center justify-center  mr-2 overflow-hidden text-sm font-medium rounded-md group bg-gradient-to-br  from-green-400 to-blue-600 text-white dark:text-white  focus:outline-none ">
                    <span className="relative px-2 py-1 transition-all ease-in duration-75   rounded-md ">
                      Active
                    </span>
                  </div>
                ) : (
                  <div className="relative inline-flex items-center cursor-default justify-center  mr-2 overflow-hidden text-sm font-medium rounded-md group bg-gradient-to-br  from-gray-600 to-slate-600 text-white dark:text-white  focus:outline-none ">
                    <span className="relative px-2 py-1 transition-all ease-in duration-75  dark:bg-gray-900 rounded-md ">
                      Inactive
                    </span>
                  </div>
                )}

                {/* bench */}
                {true ? (
                  <div className="text-white  bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl font-medium rounded-md text-sm px-2 py-1 text-center outline-none border-none ">
                    Online
                  </div>
                ) : (
                  <div className="text-white bg-gradient-to-br from-red-800 to-red-900 hover:bg-gradient-to-bl font-medium rounded-md text-sm px-2 py-1 text-center outline-none border-none cursor-default">
                    Offline
                  </div>
                )}
              </div>
            </div>
            {/* controlling unit */}
            <div className="w-full flex  p-2">
              {/* Unit1 */}
              <div className="w-full text-center flex flex-col gap-2 justify-around border-r border-dashed">
                {/* name */}
                <div>Unit 1</div>
                {/* switching */}
                <div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      value=""
                      className="sr-only peer"
                      checked
                    />
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>

              {/* Unit2 */}
              <div className="w-full text-center flex flex-col gap-2 justify-around">
                {/* name */}
                <div>Unit 2</div>
                {/* switching */}
                <div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      value=""
                      className="sr-only peer"
                      checked
                    />
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // stat
          <div className="p-2  w-full dark:text-slate-200 rounded-b-md ">
            {/* name and value -1 */}
            <div className="w-full flex justify-between border-b border-dashed  py-2">
              {/* name */}
              <div className="w-full bg-slate-600 rounded-l text-center truncate text-slate-200">
                1
              </div>
              {/* value */}
              <div className="w-full bg-slate-400 rounded-r text-center truncate text-slate-800">
                2
              </div>
            </div>

            {/* name and value -2 */}
            <div className="w-full flex justify-between border-b border-dashed py-2">
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
        )}
      </div>
    </div>
  );
};

export default Card;
