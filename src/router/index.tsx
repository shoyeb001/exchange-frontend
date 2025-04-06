import React from 'react'
import { createBrowserRouter } from 'react-router'
import publicRoutes from './PublicRoutes';
import RootLayout from './layout/RootLayout';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            ...publicRoutes,
        ],
    }
])

export default router;