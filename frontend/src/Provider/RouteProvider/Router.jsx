import { createBrowserRouter } from "react-router-dom";

import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import RootLayout from "../../Layout/RootLayout";
import Home from "../../pages/Home/Home";
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
export default router;
