import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home";
import Statistics from "./../Pages/Statistics";
import Dashboard from "./../Pages/Dashboard";
import Banner from "../Components/Banner";
import ProductCards from "../Components/ProductCards";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../categories.json"),

        children: [
          {
            path: "/cards",
            element: <ProductCards></ProductCards>,
          },
        ],
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
