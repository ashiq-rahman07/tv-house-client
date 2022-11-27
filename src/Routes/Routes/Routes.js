import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AddProduct from "../../Pages/Dasboard/AddProduct/AddProduct";
import MyBooking from "../../Pages/Dasboard/MyBooking/MyBooking";
import MyProduct from "../../Pages/Dasboard/MyProduct/MyProduct";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Products from "../../Pages/Products/Products";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/products/:category_name',
                element: <PrivateRoute><Products></Products></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.category_name}`)
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/login',
                element:<Login></Login>
            }
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
            {
                path:'/dashboard',
                element:<MyBooking></MyBooking>
            },
            {
                path:'/dashboard/myproduct',
                element:<MyProduct></MyProduct>
            },
            {
                path:'/dashboard/addproduct',
                element:<AddProduct></AddProduct>
            }
        ]
    }
])

export default router;