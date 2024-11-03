import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { routes } from "./routes.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) =>
          route.children ? (
            <Route path={route.path} element={route.element}>
              {route.children.map((item) => (
                <Route path={item.path} element={item.element} />
              ))}
            </Route>
          ) : (
            <Route path={route.path} element={route.element} />
          )
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;


