import React from "react";
import ReactDOM from "react-dom/client";
import Knowledge from "./pages/Knowledge.jsx";
import Quiz1 from "./pages/Quiz1.jsx";
import Quiz2 from "./pages/Quiz2.jsx";
import TestPage from "./pages/TestPage.jsx";
import GameHub from "./pages/GameHub.jsx";
import DNDGame from "./pages/DNDGame.jsx";
import Recongnition from "./pages/Recognition.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Consent from "./pages/Consent.jsx";
import Home from "./pages/Home.jsx";
import Visualization from "./pages/Visualization.jsx";

import App from "./App.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/knowledge",
    element: <Knowledge />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/quiz1",
    element: <Quiz1 />,
  },
  {
    path: "/quiz2",
    element: <Quiz2 />,
  },
  {
    path: "/game",
    element: <GameHub />,
  },
  {
    path: "/game/dnd",
    element: <DNDGame />,
  },
  {
    path: "/recognition",
    element: <Recongnition />,
  },
  {
    path: "/consent",
    element: <Consent />,
  },
  {
    path: "/visual",
    element: <Visualization />,
  },
  {
    path: "/test",
    element: <TestPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
