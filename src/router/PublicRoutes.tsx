import Login from "@/pages/public/auth/Login";
import Register from "@/pages/public/auth/Register";
import Home from "@/pages/public/home/Home";

const publicRoutes = [
    {
        path: '',
        element: <Home />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/register',
        element: <Register />,
    }
];

export default publicRoutes;