import Home from "@/pages/public/home/Home";

const publicRoutes = [
    {
        path: '',
        element: <Home />,
    },
    {
        path: '/login',
        element: <h1>Login</h1>,
    },
    {
        path: '/register',
        element: <h1>Register</h1>,
    }
];

export default publicRoutes;