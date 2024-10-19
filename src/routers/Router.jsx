import {
    createBrowserRouter,    
    useNavigate
  } from "react-router-dom";
import Layout from "../Layout/Layout";
import HomePage from "../page/HomePage";
import AboutUsPage from "../page/AboutUsPage";
import ContactPage from "../page/ContactPage";
import MoviesPage from "../page/MoviesPage";
import NavbarCMP from "../components/NavbarCMP";
import NotFound from "../components/NotFound";
import SingleMovie from "../components/SingleMovie";
import Login from "../page/Login";
import SignUp from "../page/SignUp";


export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Layout />,
            children:[
                {
                    path: "/",
                    element: <HomePage />,
                },
                // {
                //     path: "home",
                //     element: <NavbarCMP/>,
                // },
                {
                    path: "about",
                    element: <AboutUsPage/>,
                },
                {
                    path: "contact",
                    element: <ContactPage/>,
                },
                {
                    path: "movies",
                    element: <MoviesPage/>,
                },
                {
                    path: "movies/:id",
                    element: <SingleMovie/>
                },
                {
                    path: "user/:id",
                    element: <HomePage/>,
                },
                {
                    path: "*",
                    element: <NotFound/>,
                },
                {
                    path: "login",
                    element: <Login/>
                },
                {
                    path: "signup",
                    element: <SignUp/>
                },
            ],
        },
    ]
);