import * as React from "react";
import { RouterProvider } from "react-router-dom";
import mainRouter from "./routers/main-router";
import BoardListPage from "./routes/board/page";
import BoardDetailPage from "./routes/board/detail/page";

// import './App.css'

function App() {
  return (
    <RouterProvider router={mainRouter}>
      <BoardListPage />
      
    </RouterProvider>
  );

}

export default App
