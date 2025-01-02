import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {Tasks , Completed} from "./pages/index.js"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Tasks />,
      },
      {
        path: "/completed",
        element:<Completed/>
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route}>
      <App />
    </RouterProvider>
  </StrictMode>
);
