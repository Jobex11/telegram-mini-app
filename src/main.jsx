import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// routing
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Moon from "./Moon.jsx";
import Game from "./Game.jsx";
import Tasks from "./Tasks.jsx";
import Wallet from "./Wallet.jsx";
import Friends from "./Friends.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/moon" element={<Moon />} />
        <Route path="/game" element={<Game />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/friends" element={<Friends />} />
      </Routes>
    </Router>
  </StrictMode>
);
