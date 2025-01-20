import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/home/Home";
import Setting from "./pages/setting/Setting";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
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
      ],
    },
  ]);

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
      <button
        className="fixed top-2 right-2 bg-green-700 px-2 rounded-lg text-slate-200"
        onClick={handleBackground}
      >
        Switch
      </button>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
