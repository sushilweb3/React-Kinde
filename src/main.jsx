import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import NotFoundPage from './views/NotFoundPage';
import BuyBase from './views/BuyBase';
import Dashboard from './views/Dashboard';
import ProtectedRoute from './views/ProtectedRoute';
import Auth from './components/Auth';

import { KindeProvider } from "@kinde-oss/kinde-auth-react";


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/Auth',
    element: <Auth />,
  },
  {
    path: '/dashboard',
    element: <ProtectedRoute />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'KYC',
        element: <BuyBase />,
      },
    ],
  },
]);

const handleRedirectCallback = (user, appState) => {
  console.log({ user, appState });
  if (appState?.redirectTo) {
    window.location.href = appState.redirectTo;
  } else {
    window.location.href = '/';
  }
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <KindeProvider
      clientId={import.meta.env.VITE_KINDE_CLIENT_ID}
      domain="https://basebrett.kinde.com"
      logoutUri={window.location.origin}
      redirectUri={window.location.origin}
      onRedirectCallback={handleRedirectCallback}
    >
      <RouterProvider router={router} />
    </KindeProvider>
  </React.StrictMode>,
)
