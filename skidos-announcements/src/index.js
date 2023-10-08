import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppLayout from "./App";
import reportWebVitals from "./reportWebVitals";
import Body from "./components/body";
import LoginForm from "./components/loginForm";
import AnnouncSubmitForm from "./components/announcSubmitform";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

/*I used the power of react-router-dom to navigate from one page to another, router will contains all the path which are given to each components. */

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/submit",
        element: <AnnouncSubmitForm />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

reportWebVitals();
