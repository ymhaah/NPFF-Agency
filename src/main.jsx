import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(
    document.querySelector("[react-root='main-root']")
);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
