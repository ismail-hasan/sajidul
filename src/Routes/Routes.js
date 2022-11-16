import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Appoiment from '../Pages/Appoiment/Appoiment';
import Home from '../Pages/Home/Home/Home';
import Main from '../Pages/Layout/Main';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
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
                path: '/appoientment',
                element: <Appoiment></Appoiment>
            }
        ]
    }
])


export default router;