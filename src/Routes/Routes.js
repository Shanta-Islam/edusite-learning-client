import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Courses from "../Pages/Shared/Courses/Courses";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import Login from "../Pages/Login/Login";
import Blog from "../Pages/Blog/Blog";
import SignUp from "../Pages/SignUp/SignUp";
import FaqPage from "../Pages/FaqPage/FaqPage";
import PrivateRoute from "./PrivateRoute";
import Profile from "../Pages/Profile/Profile";
import ResetPassword from "../Pages/ResetPassword/ResetPassword";
import TermsAndConditions from "../Pages/TermsAndConditions/TermsAndConditions";
import Checkout from "../Pages/Checkout/Checkout";
import NotFound from "../Pages/NotFound/NotFound";

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
          {
            path: "/login",
            element: <Login></Login>
          },
          {
            path: "/blog",
            element: <Blog></Blog>
          },
          {
            path: "/signup",
            element: <SignUp></SignUp>
          },
          {
            path: "/faq",
            element: <FaqPage></FaqPage>
          },
          {
            path: "/profile",
            element: <PrivateRoute><Profile></Profile></PrivateRoute>
          },
          {
            path: "/resetpassword",
            element: <PrivateRoute><ResetPassword></ResetPassword></PrivateRoute>
          },
          {
            path: "/terms",
            element: <TermsAndConditions></TermsAndConditions>
          },
          {
            path: "/checkout/:id",
            loader: ({ params }) => fetch(`https://edusite-learning-server.vercel.app/course/${params.id}`),
            element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
          },
          {
            path: "*",
            element: <NotFound></NotFound>
          }
        ]
      }
])