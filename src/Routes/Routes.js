import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                loader: ()=> fetch("https://edusite-learning-server.vercel.app/courses"),
                element: <Home></Home>
              },
              {
                path: "/home",
                loader: ()=> fetch("https://edusite-learning-server.vercel.app/courses"),
                element: <Home></Home>
              },
        ]
      }
])