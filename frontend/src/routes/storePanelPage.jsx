import { useState, useEffect } from "react";
import Header from "../COMPONENTES/header.jsx";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext.js";
import { Outlet } from "react-router-dom";

function StorePanelPage() {
  const [productsInfo, setProductsInfo] = useState(null);
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productURLName, setProductURLName] = useState("");

  const { user } = useAuthContext();

  // Aca defini las diapositivas para el Carousel
  const slides = [
    <div key="1">Slide 1</div>,
    <div key="2">Slide 2</div>,
    <div key="3">Slide 3</div>,
  ];

  const handleCreateProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:5000/api/storepanel/products/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
          body: JSON.stringify({
            name: productName,
            description: productDescription,
            price: productPrice,
            URLName: productURLName,
          }),
        }
      );
      const json = await response.json();
      if (response.ok) {
        console.log("Product added");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/storepanel/products",
          {
            headers: { Authorization: `Bearer ${user.token}` },
          }
        );
        const json = await response.json();
        if (response.ok) {
          setProductsInfo(json);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      {/* sidebar */}
      <div className="bg-gray-100 h-screen font-sans flex">
        <div className="bg-gray-800 text-white w-64 p-6 flex flex-col">
          <div className="text-2xl font-bold mb-8">Admin Panel</div>
          <nav>
            <Link
              to="./"
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
            >
              Dashboard
            </Link>
            <a
              href="#"
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
            >
              Clientes
            </a>
            <Link
              to="./products"
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
            >
              Productos
            </Link>
            <a
              href="#"
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
            >
              Ordenes
            </a>
            <a
              href="#"
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
            >
              Payments
            </a>
            <a
              href="#"
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
            >
              Ajustes
            </a>
          </nav>
          <div className="mt-auto">
            <button className="bg-red-500 text-white px-4 py-2 rounded w-full hover:bg-red-600">
              Logout
            </button>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
}

export default StorePanelPage;
