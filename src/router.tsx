import MainLayout from "layout/mainLayout";
import Detail from "pages/Detail";
import Main from "pages/Main";
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
        path: "main",
        element: <Main />,
      },
      {
        path: "detail/:id", // 동적 경로 설정
        element: <Detail />, // 동적 페이지 컴포넌트
      },
    ],
  },
]);

export default router;
