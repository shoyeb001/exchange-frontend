import Login from "@/pages/public/auth/Login";
import Register from "@/pages/public/auth/Register";
import Home from "@/pages/public/home/Home";
import Trade from "@/pages/public/trade/Trade";

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
    },
    {
        path: '/trade/:symbol',
        element: <Trade />
    }
];

export default publicRoutes;