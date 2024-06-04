import React, { useState, useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

function StoreSettings() {
  // Estado para el formulario de información de la tienda
  // const [storeInfo, setStoreInfo] = useState({
  //   name: "",
  //   description: "",
  //   address: "",
  //   email: "",
  //   phone: "",
  // });

  // Función para manejar cambios en el formulario
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setStoreInfo({ ...storeInfo, [name]: value });
  // };

  // Función para manejar el envío del formulario
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Lógica para enviar la información al servidor o almacenarla localmente
  //   console.log("Formulario enviado:", storeInfo);
  // };

  const { user } = useAuthContext();

  const [name, setName] = useState(user.name);
  const [description, setDescription] = useState(user.name);
  const [address, setAddress] = useState(user.name);
  const [email, setEmail] = useState(user.name);
  const [phoneNumber, setPhoneNumber] = useState(user.name);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/storepanel/account",
          {
            headers: { Authorization: `Bearer ${user.token}` },
          }
        );
        const json = await response.json();
        if (response.ok) {
          setName(json.name);
          setDescription(json.description);
          setAddress(json.address);
          setEmail(json.email);
          setPhoneNumber(json.phoneNumber);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "http://localhost:5000/api/storepanel/account",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          name: name,
          description: description,
          address: address,
          email: email,
          phoneNumber: phoneNumber,
        }),
      }
    );
  };
  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">Ajustes de la Tienda</h1>
      {/* Formulario para configurar la información de la tienda */}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h2 className="text-xl font-semibold mb-4">Información de la Tienda</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block font-medium text-gray-700 mb-1"
            >
              Nombre:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border rounded px-4 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block font-medium text-gray-700 mb-1"
            >
              Descripción:
            </label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border rounded px-4 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="address"
              className="block font-medium text-gray-700 mb-1"
            >
              Dirección:
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="border rounded px-4 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block font-medium text-gray-700 mb-1"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded px-4 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block font-medium text-gray-700 mb-1"
            >
              Teléfono:
            </label>
            <input
              type="number"
              id="phone"
              name="phone"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="border rounded px-4 py-2 w-full"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Guardar Cambios
        </button>
      </form>
      {/* Otras secciones de configuración pueden agregarse aquí */}
    </div>
  );
}

export default StoreSettings;
