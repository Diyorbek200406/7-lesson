// style import
import "./index.css";
// component import
import App from "./App.jsx";
// react import
import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "./context/auth";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
