import React, { useState } from "react";

function StoreSettings() {
  // Estado para el formulario de información de la tienda
  const [storeInfo, setStoreInfo] = useState({
    name: "",
    description: "",
    address: "",
    email: "",
    phone: "",
  });

  // Función para manejar cambios en el formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStoreInfo({ ...storeInfo, [name]: value });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar la información al servidor o almacenarla localmente
    console.log("Formulario enviado:", storeInfo);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">Ajustes de la Tienda</h1>
      {/* Formulario para configurar la información de la tienda */}
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Información de la Tienda</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium text-gray-700 mb-1">Nombre:</label>
            <input type="text" id="name" name="name" value={storeInfo.name} onChange={handleInputChange} className="border rounded px-4 py-2 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block font-medium text-gray-700 mb-1">Descripción:</label>
            <textarea id="description" name="description" value={storeInfo.description} onChange={handleInputChange} className="border rounded px-4 py-2 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block font-medium text-gray-700 mb-1">Dirección:</label>
            <input type="text" id="address" name="address" value={storeInfo.address} onChange={handleInputChange} className="border rounded px-4 py-2 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium text-gray-700 mb-1">Email:</label>
            <input type="email" id="email" name="email" value={storeInfo.email} onChange={handleInputChange} className="border rounded px-4 py-2 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block font-medium text-gray-700 mb-1">Teléfono:</label>
            <input type="text" id="phone" name="phone" value={storeInfo.phone} onChange={handleInputChange} className="border rounded px-4 py-2 w-full" />
          </div>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Guardar Cambios</button>
      </form>
      {/* Otras secciones de configuración pueden agregarse aquí */}
    </div>
  );
}

export default StoreSettings;
