import React, { useState } from 'react';

function Clients() {
  const [clients, setClients] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210' },
  ]);

  const [newClient, setNewClient] = useState({ name: '', email: '', phone: '' });

  const handleAddClient = () => {
    setClients([...clients, { id: clients.length + 1, ...newClient }]);
    setNewClient({ name: '', email: '', phone: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewClient({ ...newClient, [name]: value });
  };

  const handleDeleteClient = (id) => {
    setClients(clients.filter(client => client.id !== id));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Clientes</h2>
      <div className="mb-4">
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={newClient.name}
          onChange={handleInputChange}
          className="border p-2 mr-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newClient.email}
          onChange={handleInputChange}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          name="phone"
          placeholder="Teléfono"
          value={newClient.phone}
          onChange={handleInputChange}
          className="border p-2 mr-2"
        />
        <button
          onClick={handleAddClient}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Añadir Cliente
        </button>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Nombre</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Teléfono</th>
            <th className="py-2 px-4 border-b">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clients.map(client => (
            <tr key={client.id}>
              <td className="py-2 px-4 border-b">{client.id}</td>
              <td className="py-2 px-4 border-b">{client.name}</td>
              <td className="py-2 px-4 border-b">{client.email}</td>
              <td className="py-2 px-4 border-b">{client.phone}</td>
              <td className="py-2 px-4 border-b text-right">
                <button className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 mr-2">
                  Editar
                </button>
                <button
                  onClick={() => handleDeleteClient(client.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Borrar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Clients;
