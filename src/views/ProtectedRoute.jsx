import React from 'react';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import { Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const { isLoading, isAuthenticated, login } = useKindeAuth();

  console.log('ProtectedRoute:', { isLoading, isAuthenticated });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isLoading && !isAuthenticated) {
    return (
      <div>
        <h1 className="text-3xl font-medium">Not authenticated</h1>
        <button
          onClick={() => login()}
          className="bg-zinc-900 text-white px-3 py-2 rounded"
        >
          Login
        </button>
      </div>
    );
  }

  if (!isLoading && isAuthenticated) {
    return <Outlet />;
  }

  return null;
};

export default ProtectedRoute;
