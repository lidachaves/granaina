import { useState, useEffect } from 'react';
import Header from '../COMPONENTES/header.jsx';
import { useLogin } from '../hooks/useLogin.js';
import { Link } from 'react-router-dom';

function StorePanelPage() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email, password);
    }

    return (
        <>
            <Header />
            {/* sidebar */}
            <div className="bg-gray-100 h-screen font-sans flex">
                <div className="bg-gray-800 text-white w-64 p-6 flex flex-col">
                    <div className="text-2xl font-bold mb-8">Admin Panel</div>
                    <nav>
                        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Dashboard</a>
                        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Clientes</a>
                        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Productos</a>
                        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Ordenes</a>
                        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Payments</a>
                        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Ajustes</a>
                    </nav>
                    <div className="mt-auto">
                        <button className="bg-red-500 text-white px-4 py-2 rounded w-full hover:bg-red-600">Logout</button>
                    </div>
                </div>
                <div className="flex-1 p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-3xl font-semibold">Dashboard</h1>
                              {/* BUSCADOR */}
                        <div>
                            <input type="text" placeholder="Search..." className="border rounded py-2 px-3" />
                            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ml-2">Search</button>
                        </div>
                    </div>

                        {/* CONTENIDO DEL DASHBOARD */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-xl font-bold mb-2">Total Sales</h2>
                            <p className="text-gray-700">$23,456</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-xl font-bold mb-2">Total Orders</h2>
                            <p className="text-gray-700">1,234</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-xl font-bold mb-2">Total Products</h2>
                            <p className="text-gray-700">567</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-xl font-bold mb-2">Total Users</h2>
                            <p className="text-gray-700">789</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                        <h2 className="text-2xl font-bold mb-4">Recent Users</h2>
                        <table className="min-w-full bg-white">
                            <thead className="bg-gray-800 text-white">
                                <tr>
                                    <th className="w-1/3 px-4 py-2">Name</th>
                                    <th className="w-1/3 px-4 py-2">Email</th>
                                    <th className="w-1/3 px-4 py-2">Role</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700">
                                <tr>
                                    <td className="border px-4 py-2">Escaloneta</td>
                                    <td className="border px-4 py-2">DS10@example.com</td>
                                    <td className="border px-4 py-2">Admin</td>
                                </tr>
                                <tr className="bg-gray-100">
                                    <td className="border px-4 py-2">Jane Smith</td>
                                    <td className="border px-4 py-2">DS10@example.com</td>
                                    <td className="border px-4 py-2">User</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Escaloneta</td>
                                    <td className="border px-4 py-2">bob@example.com</td>
                                    <td className="border px-4 py-2">User</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">Recent Orders</h2>
                        <table className="min-w-full bg-white">
                            <thead className="bg-gray-800 text-white">
                                <tr>
                                    <th className="w-1/4 px-4 py-2">Order ID</th>
                                    <th className="w-1/4 px-4 py-2">Customer</th>
                                    <th className="w-1/4 px-4 py-2">Amount</th>
                                    <th className="w-1/4 px-4 py-2">Status</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700">
                                <tr>
                                    <td className="border px-4 py-2">12345</td>
                                    <td className="border px-4 py-2">KEVIN</td>
                                    <td className="border px-4 py-2">$100</td>
                                    <td className="border px-4 py-2">Pending</td>
                                </tr>
                                <tr className="bg-gray-100">
                                    <td className="border px-4 py-2">12346</td>
                                    <td className="border px-4 py-2">Rafaelo</td>
                                    <td className="border px-4 py-2">$150</td>
                                    <td className="border px-4 py-2">Completed</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">12347</td>
                                    <td className="border px-4 py-2">Rafaelo</td>
                                    <td className="border px-4 py-2">$200</td>
                                    <td className="border px-4 py-2">Processing</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StorePanelPage;
