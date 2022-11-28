import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Fpage from "../../Pages/404page/Fpage";
import Blog from "../../Pages/Blog/Blog";
import AddProduct from "../../Pages/Dasboard/AddProduct/AddProduct";
import AllBuyer from "../../Pages/Dasboard/AllBuyer/AllBuyer";
import AllSeller from "../../Pages/Dasboard/AllSeller/AllSeller";
import AllUser from "../../Pages/Dasboard/AllUser/AllUser";
import MyBooking from "../../Pages/Dasboard/MyBooking/MyBooking";
import MyOrders from "../../Pages/Dasboard/MyOrders/MyOrders";
import MyProduct from "../../Pages/Dasboard/MyProduct/MyProduct";
import Payment from "../../Pages/Dasboard/Payment/Payment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Products from "../../Pages/Products/Products";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/products/:category_name',
                element: <PrivateRoute><Products></Products></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.category_name}`)
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard/myorders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/myproduct',
                element: <MyProduct></MyProduct>
            },
            {
                path: '/dashboard/addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/alluser',
                element: <AdminRoute><AllUser></AllUser></AdminRoute>

            },
            {
                path:'/dashboard/payment',
                element:<Payment></Payment>,
             
            }
        ]
    },
    {
        path:'/*',
        element:<Fpage></Fpage>
    }

])

export default router;