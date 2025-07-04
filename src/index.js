import React from "react";
import { createRoot } from "react-dom/client"; // ✅ Use createRoot from react-dom/client
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

// Get the root element
const container = document.getElementById("root");

// Create the root and render the app
const root = createRoot(container);
root.render(
  <Router>
    <App />
  </Router>
);
