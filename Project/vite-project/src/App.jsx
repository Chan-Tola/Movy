import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";
import { HomePage, ErrorPage, Explore, FQA, MoiveDetail } from "./Pages/Index";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ":id",
        element: <MoiveDetail />,
      },
      {
        path: "FQA",
        element: <FQA />,
      },
      {
        path: "EXPLORE",
        element: <Explore />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
