import MainLayout from "layout/mainLayout";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <div />,
      },
      {
        path: "a",
        element: <div>Hello world</div>,
      },
      {
        path: "b",
        element: <div />,
      },
    ],
  },
]);

export default router;
