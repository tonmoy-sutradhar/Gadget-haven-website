import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home";
import Statistics from "./../Pages/Statistics";
import Dashboard from "./../Pages/Dashboard";
import ProductCards from "../Components/ProductCards";
import ProductDetails from "../Pages/ProductDetails";

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
            path: "/",
            element: <ProductCards></ProductCards>,
            loader: () => fetch("../products.json"),
          },
          {
            path: "/cards/:category",
            element: <ProductCards></ProductCards>,
            loader: () => fetch("../products.json"),
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
      {
        path: "/product/:id",
        element: <ProductDetails></ProductDetails>,
      },
    ],
  },
]);

export { routes };
