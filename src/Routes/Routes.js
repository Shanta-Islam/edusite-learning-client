import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Courses from "../Pages/Shared/Courses/Courses";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";

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
              {
                path: "/courses",
                loader: ()=> fetch("https://edusite-learning-server.vercel.app/courses"),
                element: <Courses></Courses>
              },
              {
                path: "/course/:id",
                loader: ({ params }) => fetch(`https://edusite-learning-server.vercel.app/course/${params.id}`),
                element: <CourseDetails></CourseDetails>
              },
        ]
      }
])