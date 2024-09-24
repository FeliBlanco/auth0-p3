import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";


import Home from './Home'
import Login from './Login'
import Logout from './Logout';

const routesAuthenticated = createBrowserRouter([
    {
        path:'/',
        element: <Home />
    },
    {
        path:'/logout',
        element: <Logout />
    },
    {
        path:'*',
        element: <Navigate to="/"/>
    }
])

const routes = createBrowserRouter([
    {
        path:'/login',
        element: <Login />
    },
    {
        path:'*',
        element: <Navigate to={"/login"} />
    }
])

export default function Routes() {

    const { isAuthenticated, isLoading } = useAuth0();

    if(isLoading) return <div>Loading...</div>

    if(isAuthenticated) return <RouterProvider router={routesAuthenticated} />;

    return <RouterProvider router={routes} />;
}