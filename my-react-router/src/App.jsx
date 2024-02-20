import * as React from "react";
import { RouterProvider } from "react-router-dom";
import mainRouter from "./routers/main-router";
import BoardListPage from "./routes/board/page";
import BoardDetailPage from "./routes/board/detail/page";
import AuthProvider from "./components/AuthProvider";

// import './App.css'

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={mainRouter}>
        <BoardListPage />
      </RouterProvider>
    </AuthProvider>
  );

}

export default App
