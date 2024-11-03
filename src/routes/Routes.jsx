import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home";
import Statistics from "./../Pages/Statistics";
import Dashboard from "./../Pages/Dashboard";
import Banner from "../Components/Banner";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [],
      },
      {
        path: "/Statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);

export { routes };
