import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Artist from './Pages/Artist.jsx';
import MarketPlace from './Pages/MarketPlace.jsx';
import SocialGood from './Pages/SocialGood.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/artist',
        element: <Artist />,
    },
    {
        path: '/marketplace',
        element: <MarketPlace />,
    },
    {
        path: '/socialgood',
        element: <SocialGood />,
    }
]);

const Container = document.getElementById('root');
const root = ReactDOM.createRoot(Container);
root.render(
    <RouterProvider router={router} />
);