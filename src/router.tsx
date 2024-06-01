import MainLayout from "layout/mainLayout";
import Candidates from "pages/Candidates";
import Detail from "pages/Detail";
import Main from "pages/Main";
import EntryPage from "pages/Entry";
import ServicePage from "pages/Service";
import SplashPage from "pages/Splash";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <SplashPage />,
      },
      {
        path: "entry",
        element: <EntryPage />,
      },
      {
        path: "service",
        element: <ServicePage />,
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
        path: "candidate", // 동적 경로 설정
        element: <Candidates />, // 동적 페이지 컴포넌트
      },
      {
        path: "detail/:id", // 동적 경로 설정
        element: <Detail />, // 동적 페이지 컴포넌트
      },
    ],
  },
]);

export default router;
