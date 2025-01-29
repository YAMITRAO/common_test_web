import { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { PiCrosshairFill } from "react-icons/pi";
import { MdCancel } from "react-icons/md";

const ProjectCompoCardDesign = () => {
  const [progress] = useState(76);
  const [showFullTitle, setShowFullTitle] = useState(false);
  return (
    <div>
      {/* start */}
      <div className="w-full  max-w-[320px] m-2 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 ">
        {/* details container */}
        <div className="flex flex-col p-4    gap-2 text-slate-700 dark:text-white">
          {/* upper section */}
          <div className="w-full h-full flex gap-8 ">
            {/* upper left */}
            <div className="w-full h-full flex flex-col">
              {/* image and title  */}
              <div className="w-fit flex flex-col gap-1 justify-center items-start  p-1 pl-2">
                <div className="h-16 w-16 shadow-lg  bg-slate-700 dark:bg-slate-100 rounded-lg border border-slate-500 dark:border-slate-400 flex justify-center items-center">
                  <img
                    src="https://demos.creative-tim.com/notus-js/assets/img/bootstrap.jpg"
                    className="h-[60px] w-[60px] shadow-lg  rounded-lg -hue-rotate-90"
                    alt="..."
                  />
                  {/* if no img avilable */}
                  {/* <div className="w-fit h-fit flex justify-center items-center text-2xl  font-bold bg-[#165e62] px-2 font-mono  rounded-md">
                    P
                  </div> */}
                </div>
                <div className="w-full flex items-center">
                  <span
                    className="truncate font-bold font-mono text-lg  max-w-[100px] overflow-hidden"
                    title="this is a test title of the project"
                  >
                    {" "}
                    Test Design gfdkghdfjkggdbn kdfgjdfkgjfbgkfjgbdfkgdg
                    dfgdfjkgdf{" "}
                  </span>
                  <span
                    className="text-cyan-500 cursor-pointer hover:scale-110 transition-all hover:text-cyan-200"
                    onClick={() => setShowFullTitle((prev) => !prev)}
                  >
                    {showFullTitle ? (
                      <span className="text-red-700 hover:text-red-600">
                        <MdCancel />
                      </span>
                    ) : (
                      <PiCrosshairFill />
                    )}
                  </span>
                </div>
              </div>
            </div>
            {/* upper right */}
            <div className="w-full h-full flex justify-end ">
              {/* status, date and name */}
              <div className="w-fit flex flex-col gap-2 pr-2 justify-center items-end">
                {/* status */}
                <div className="w-fit">
                  {/* status active */}
                  <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                    <span className="w-2 h-2 me-1 bg-green-500 rounded-full"></span>
                    Active
                  </span>
                  {/* status pending */}
                  {/* <span className="inline-flex items-center bg-yellow-300 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">
                      <span className="w-2 h-2 me-1 bg-yellow-500 rounded-full"></span>
                      Pending
                    </span> */}
                  {/* status rejected */}
                  {/* <span className="inline-flex items-center bg-red-300 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                      <span className="w-2 h-2 me-1 bg-red-500 rounded-full"></span>
                      Rejected
                    </span> */}
                </div>
                {/* date */}
                <div>
                  <span className="opacity-80 font-mono font-bold">
                    Jan 25, 2025
                  </span>
                </div>
                {/* name */}
                <div>
                  <span className="opacity-80 font-mono font-bold flex flex-col items-end gap-1">
                    Test User
                    <span className="text-[12px]">10th,C</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* controlled by upper left button */}
          {/* complete title */}
          {showFullTitle && (
            <div className="w-full h-fit text-wrap border rounded-md p-2 opacity-80 ">
              Test Design gfdkghdfjkggdbn kdfgjdfkgjfbgkfjgbdfkgdg dfgdfjkgdf
            </div>
          )}
          {/* middle section */}
          <div className="w-full h-full flex justify-start pt-6">
            <div className="w-fit h-full ">
              <div className="flex justify-center items-center min-w-[110px] ">
                <img
                  src="https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg"
                  title="test user"
                  alt="..."
                  className="w-10 h-10 rounded-full border-2 border-slate-300 dark:border-slate-50 shadow cursor-pointer hover:z-10 hover:scale-105 transition-all"
                />
                <img
                  src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
                  title="test user2"
                  alt="..."
                  className="w-10 h-10 rounded-full border-2 border-slate-300 dark:border-slate-50 shadow -ml-5 hover:z-10 hover:scale-105 transition-all cursor-pointer"
                />
                <img
                  src="https://demos.creative-tim.com/notus-js/assets/img/team-3-800x800.jpg"
                  title="test user3"
                  alt="..."
                  className="w-10 h-10 rounded-full border-2 border-slate-300 dark:border-slate-50 shadow -ml-5 hover:z-10 hover:scale-105 transition-all cursor-pointer"
                />
                <img
                  src="https://demos.creative-tim.com/notus-js/assets/img/team-4-470x470.png"
                  title="test user4"
                  alt="..."
                  className="w-10 h-10 rounded-full border-2 border-slate-300 dark:border-slate-50 shadow -ml-5 hover:z-10 hover:scale-105 transition-all cursor-pointer"
                />
              </div>
            </div>
          </div>
          {/*  */}

          {/* lower section */}
          <div className="w-full h-full pt-8">
            {/* progress bar */}
            <div className="pl-2">
              <div className="flex  items-center">
                {/* percentage */}
                <span className="mr-2  font-medium">{progress}%</span>
                {/* horizontal progress bar */}
                <div className="relative w-full">
                  <div
                    style={{
                      background:
                        progress == 0
                          ? "#ffcac6"
                          : progress > 0 && progress < 30
                          ? "#ead5ff"
                          : progress >= 30 && progress < 60
                          ? "#ead5ff"
                          : progress >= 60 && progress < 90
                          ? "#fffeb3"
                          : progress >= 90 && progress < 100
                          ? "#bae5fd"
                          : "#10b982",
                    }}
                    className="overflow-hidden h-2 text-xs flex rounded"
                  >
                    <div
                      style={{
                        width: `${progress}%`,
                        background:
                          progress == 0
                            ? "#ffcac6"
                            : progress > 0 && progress < 30
                            ? "#ed4799"
                            : progress >= 30 && progress < 60
                            ? "#a956f6"
                            : progress >= 60 && progress < 90
                            ? "#c9930c"
                            : progress >= 90 && progress < 100
                            ? "#1ea0dc"
                            : "##10b982",
                      }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center "
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* action container */}
        <div className="flex flex-row-reverse justify-between items-center pt-6  p-4 gap-2 text-slate-700 dark:text-white">
          {/* show more button */}
          <button
            type="button"
            className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Show More
          </button>

          {/* setting icons and actions */}
          <div>
            <span className="text-xl cursor-pointer">
              <IoSettingsOutline />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCompoCardDesign;
