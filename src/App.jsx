import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import "./App.css";
import { routes } from "./routes";

function App() {
  const myRoutes = createBrowserRouter(routes);

  return <RouterProvider router={myRoutes} />;
}

export default App;
