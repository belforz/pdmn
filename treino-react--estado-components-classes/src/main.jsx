import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "react-bootstrap";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeProvider breakpoints={["xl", "lg", "sm", "md"]}>
    <App />
  </ThemeProvider>
);
