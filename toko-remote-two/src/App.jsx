import React from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";

const App = () => (
  <div>
    On Duty !
  </div>
);

const domNode = document.getElementById('app');
const root = createRoot(domNode);
root.render(<App />);
