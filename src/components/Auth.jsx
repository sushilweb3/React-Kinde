import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
export default function Auth() {
    const { login, register, isLoading, isAuthenticated, user, logout } =
        useKindeAuth();
    const navigate = useNavigate();
    React.useEffect(() => {
        if (isAuthenticated) {
            navigate('/dashboard');
        }
    }, [isAuthenticated, navigate]);

    const handleLogin = () => {
        login({
          app_state: { redirectTo: '/dashboard' }
        });
        register({
            app_state: { redirectTo: '/dashboard' }
          });
      };

    return (
        <section className="bg-gray-50 antialiased dark:bg-gray-900">
            <div className="max-w-md mx-auto md:max-w-2xl lg:max-w-4xl">
                <div className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800 ">
                    {isLoading && (
                        <p className="text-center text-gray-500 dark:text-gray-400">Loading...</p>
                    )}

                    {!isLoading && !isAuthenticated && (
                        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 h-screen justify-center items-center">
                            <button
                                onClick={handleLogin}
                                type="button"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                                Register
                            </button>
                            <button
                                onClick={handleLogin}
                                type="button"
                                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                </svg>
                                Log In
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>

    )
}
