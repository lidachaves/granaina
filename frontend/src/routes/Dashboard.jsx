import React, { useState } from 'react';

function Dashboard() {
  // Datos de ejemplo
  const recentUsers = [
    { id: 1, name: 'Escaloneta', email: 'DS10@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'DS10@example.com', role: 'User' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User' },
  ];

  const recentOrders = [
    { id: '12345', customer: 'KEVIN', amount: '$100', status: 'Pending' },
    { id: '12346', customer: 'Rafaelo', amount: '$150', status: 'Completed' },
    { id: '12347', customer: 'Rafaelo', amount: '$200', status: 'Processing' },
  ];

  return (
    <>
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold">Dashboard</h1>
          {/* BUSCADOR */}
          <div>
            <input
              type="text"
              placeholder="Search..."
              className="border rounded py-2 px-3"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ml-2">
              Search
            </button>
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
                <th className="w-1/4 px-4 py-2">Name</th>
                <th className="w-1/4 px-4 py-2">Email</th>
                <th className="w-1/4 px-4 py-2">Role</th>
                <th className="w-1/4 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {recentUsers.map((user) => (
                <tr key={user.id}>
                  <td className="border px-4 py-2">{user.name}</td>
                  <td className="border px-4 py-2">{user.email}</td>
                  <td className="border px-4 py-2">{user.role}</td>
                  <td className="border px-4 py-2 text-right">
                    <button className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
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
                <th className="w-1/4 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {recentOrders.map((order) => (
                <tr key={order.id}>
                  <td className="border px-4 py-2">{order.id}</td>
                  <td className="border px-4 py-2">{order.customer}</td>
                  <td className="border px-4 py-2">{order.amount}</td>
                  <td className="border px-4 py-2">{order.status}</td>
                  <td className="border px-4 py-2 text-right">
                    <button className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
