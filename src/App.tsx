import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/home/Home";
import Setting from "./pages/setting/Setting";
import ProjCompListDesign from "./components/proj_comp/list_design/ProjCompListDesign";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/setting",
            element: <Setting />,
          },
          {
            path: "/test",
            element: <ProjCompListDesign />,
          },
        ],
      },
      {
        path: "*",
        element: (
          <div className="bg-slate-300 dark:bg-slate-700 h-screen dark:text-slate-200 flex justify-center items-center">
            Error Page here
          </div>
        ),
      },
    ],
    {
      basename: "/common_test_web",
    }
  );

  // handle dark and normal mode
  const handleBackground = () => {
    const selectRoot = document.getElementById("root");
    console.log(selectRoot?.classList[0]);
    selectRoot?.classList[0] == "dark"
      ? selectRoot.classList.remove("dark")
      : selectRoot!.classList.add("dark");
  };
  return (
    <div className="w-screen h-screen">
      {/* <ProjCompListDesign /> */}
      <button
        className="fixed top-2 z-50 right-2 bg-green-700 px-2 rounded-lg text-slate-200"
        onClick={handleBackground}
      >
        Switch
      </button>

      <RouterProvider router={router} />
    </div>
  );
}

export default App;
