import CampaignListPage from "~/routes/wadiz/page";
import BoardLayout from "~/routes/board/layout";

export default {
  element: <BoardLayout />,
  children: [
    {
      path: "",
      element: <CampaignListPage />,
      index: true,
    },
  ],
};
