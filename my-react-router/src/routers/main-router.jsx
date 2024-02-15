import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainPage from "~/routes/page";
import BoardListPage from "~/routes/board/page";
import BoardLayout from "~/routes/layout";
import BoardDetailPage from "~/routes/board/detail/page";
import SignUpPage from "~/components/SignUp/SignUp";
import SignInPage from "~/components/SignIn/SignIn";

export const mainRouter = [
    {
      path: "",
      element: <BoardLayout />,
      children: [
        {
          path: "",
          index: true,
          element: <MainPage />,
        },
        {
          path: "/board",
          children: [
            {
              path: "",
              element: <BoardListPage />,
              index: true,
            },
            {
              path: ":boardId",
              element: <BoardDetailPage />,
              index: true,
            },
          ],
        },
        {
            path: '/login',
            element: <SignInPage />,
            index: true,
        },
        {
            path: '/signup',
            element: <SignUpPage />,
            index: true,
        },

      ],
    },
  ];
  const router = createBrowserRouter(mainRouter);
  
  export default router;