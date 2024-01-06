import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/home";
import List from "./components/list";
import Post from "./components/post";

const router  = createBrowserRouter([
  {
    path: "/hate-frontend/",
    element: <App />,
    children: [
      {
        path: "/hate-frontend/",
        element: <Home />
      },
      {
        path: "/hate-frontend/posts",
        element: <List />
      },
      {
        path: "/hate-frontend/posts/:id",
        element: <Post />
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  )