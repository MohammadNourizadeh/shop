import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "swiper/css/bundle";
import App from "./App.jsx";
import { MainContextProvider } from "./contexts/MainContext.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainContextProvider>
      <App />
    </MainContextProvider>
  </StrictMode>
);
