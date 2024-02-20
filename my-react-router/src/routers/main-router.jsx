import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainPage from "~/routes/page";

import boardRouter from "./board-router";
import campaignRouter from "./campaign-router";

import CampaignListPage from "~/routes/wadiz/page";
// import BoardListPage from "~/routes/board/page";
// import BoardWritePage from "~/routes/board/write/page";
// import BoardDetailPage from "~/routes/board/detail/page";
import Layout from "~/routes/layout";
// import SignInPage from "~/routes/signin/page";
// import SignUpPage from "~/routes/signup/page";

export const mainRouter = [
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        index: true,
        element: <MainPage />,
      },
      // {
      //   path: "/signin",
      //   element: <SignInPage />,
      //   index: true,
      // },
      // {
      //   path: "/signup",
      //   element: <SignUpPage />,
      //   index: true,
      // },
      {
        path: "/campaign",
        children: [
          {
            path: "",
            element: <CampaignListPage />,
            index: true,
          },
          // {
          //   path: "write",
          //   element: <BoardWritePage />,
          //   index: true,
          // },
          // {
          //   path: ":boardId/edit",
          //   element: <BoardWritePage />,
          //   index: true,
          // },
          // {
          //   path: ":boardId",
          //   element: <BoardDetailPage />,
          //   index: true,
          // },
        ],
      },
    ],
  },
];
const router = createBrowserRouter(mainRouter);

export default router;