import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Dashboard from "./StudentPanel/Dashboard";
import Login from "./StudentPanel/Login";
import Auth from "./Auth/Auth";
import NoticeBoard from "./StudentPanel/NoticeBoard";
import Result from "./StudentPanel/Result";
import IdCard from "./StudentPanel/IdCard";
import PayFee from "./StudentPanel/PayFee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "",
    element: (
      <Auth>
        <Dashboard />
      </Auth>
    ),
    children: [
      {
        path: "/payment",
        element: <PayFee />,
      },
      {
        path: "/noticeboard",
        element: <NoticeBoard />,
      },
      {
        path: "/result",
        element: <Result />,
      },
      {
        path: "/idcard",
        element: <IdCard />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
