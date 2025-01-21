import { useState } from "react";
import Card from "./Card";

const ProjCompListDesign = () => {
  const [progress] = useState(76);
  return (
    <section className="relative py-16 bg-blueGray-50">
      <div className="w-full mb-12 px-4">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-slate-100 dark:bg-slate-900  text-slate-800 dark:text-slate-200 font-mono">
          {/* Table heading */}
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3 className="font-semibold text-lg ">List Table</h3>
              </div>
            </div>
          </div>

          <div className="block w-full overflow-x-auto">
            <table className="items-center w-full bg-transparent border-collapse">
              <thead className="border-y bg-slate-700 text-slate-200  dark:bg-slate-500  dark:border-slate-500 text-[14px] uppercase font-semibold  text-center ">
                <tr>
                  <th className="px-6  py-3 whitespace-nowrap  ">Project</th>
                  <th className="px-6  py-3   whitespace-nowrap  ">Creator</th>
                  <th className="px-6  py-3    whitespace-nowrap  ">Status</th>
                  <th className="px-6  py-3  whitespace-nowrap">Team</th>
                  <th className="px-6   py-3   whitespace-nowrap ">
                    Completion
                  </th>
                </tr>
              </thead>

              <tbody className="text-center text-[16px]">
                {/* rows */}
                <Card />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjCompListDesign;
