import { createBrowserRouter } from "react-router-dom";
import AddService from "../components/AddService/AddService";
import Blogs from "../components/Blogs/Blogs";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import MyReviews from "../components/MyReviews/MyReviews";
import UpdateMyReviews from "../components/MyReviews/UpdateMyReviews";
import Register from "../components/Register/Register";
import ServiceDetails from "../components/Services/ServiceDetails";
import Services from "../components/Services/Services";
import Main from "../layout/Main";

export const router = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000')

        },
        {
            path: '/services',
            element: <Services></Services>,
            loader: () => fetch('http://localhost:5000/services')
        },
        {
            path: '/services/:id',
            element: <ServiceDetails></ServiceDetails>,
            loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),

        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/blogs',
            element: <Blogs></Blogs>
        },
        {
            path: '/addservice',
            element: <AddService></AddService>
        },
        {
            path: '/myreviews',
            element: <MyReviews></MyReviews>
        },
        {
            path: '/updatereviews/:id',
            element: <UpdateMyReviews></UpdateMyReviews>
        }
    ]
}])