import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const Card = () => {
  const [progress] = useState(76);
  return (
    <tr>
      {/* project details */}
      <td className=" flex items-center justify-center py-2 ml-2">
        <img
          src="https://demos.creative-tim.com/notus-js/assets/img/bootstrap.jpg"
          className="h-12 w-12  bg-slate-700 dark:bg-slate-400 rounded-lg border border-slate-500 dark:border-slate-400 "
          alt="..."
        />
        <span
          className="ml-3  truncate"
          title="this is a test title of the project"
        >
          {" "}
          Test Design{" "}
        </span>
      </td>
      {/* creator details */}
      <td className=" capitalize truncate">test User</td>
      {/* status */}
      <td className="">
        <i className="fas fa-circle text-orange-500 mr-2"></i>
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
      </td>
      {/* team */}
      <td className="">
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
      </td>
      {/* complition  */}
      <td className="">
        <div className="flex  items-center">
          {/* percentage */}
          <span className="mr-2">{progress}%</span>
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
          {/* action button */}
          <div className="cursor-pointer mr-2 ml-2 text-lg group ">
            <BsThreeDotsVertical />
            <div className="absolute bottom-4 right-5 hidden group-hover:block rounded-md">
              <select className="bg-slate-700 text-slate-200 dark:bg-slate-300 dark:text-slate-700 p-1 rounded-lg">
                <option className="rounded-md">Select1</option>
                <option>Select2</option>
                <option>Select3</option>
              </select>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default Card;
