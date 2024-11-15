import { Navigate } from "react-router-dom";
import Admin from "./layOuts/admin/Admin";
import BasketPage from "./pages/basketPage/BasketPage";
import HomePage from "./pages/HomePage/HomePage";
import ProductInfoPage from "./pages/productInfoPage/ProductInfoPage";
import { fetchData } from "./utils/helper";

export const routes = [
  {
    path: "/",
    element: <Navigate to={"/admin/home"} />,
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "/admin/home",
        element: <HomePage />,
        loader: async () => {
          return await fetchData(
            null,
            "https://api.escuelajs.co/api/v1/products"
          );
        },
      },
      {
        path: "/admin/product/:id",
        element: <ProductInfoPage />,
        loader: async ({ params }) => {
          return await fetchData(
            params,
            "https://api.escuelajs.co/api/v1/products"
          );
        },
      },
      {
        path: "/admin/basket",
        element: <BasketPage />,
      },
    ],
  },
];
