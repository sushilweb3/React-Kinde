import React, { useEffect } from 'react';
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const { isLoading, isAuthenticated, user, logout, getToken } = useKindeAuth();

    const fetchData = async () => {
        try {
            if (isAuthenticated) {
                console.log(JSON.stringify(user, null, 2));
                const accessToken = await getToken();
                console.log(`Bearer ${accessToken}`);
            }
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => { fetchData() },)


    return (
        <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
            <div className="min-h-screen flex flex-col items-center justify-center">
                <div className="bg-white p-8 rounded shadow-md w-96">
                    <h1 className="text-2xl font-semibold mb-4 text-center">Welcome to the Dashboard</h1>

                    {!isLoading && isAuthenticated && (
                        <div className="space-y-4">
                            <div className="flex flex-col items-center">
                                <img src={user?.picture} alt="user" className="rounded-full h-24 w-24 object-cover mb-2" />
                                <p className="text-lg font-semibold">Welcome, {user?.given_name}!</p>
                                <p className="text-gray-600">{user?.email}</p>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mt-4">
                                <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Ledger</button>
                                <Link to="KYC"><button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Buy Brett</button></Link>
                            </div>

                            <button
                                onClick={logout}
                                className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                            >
                                Log out
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
