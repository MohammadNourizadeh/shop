import { Navigate } from "react-router-dom";
import Admin from "./layOuts/admin/Admin";
import HomePage, { fetchData } from "./pages/HomePage/HomePage";

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
        loader: fetchData,
      },
    ],
  },
];
