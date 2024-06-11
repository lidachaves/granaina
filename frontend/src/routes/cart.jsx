import { useState, useEffect } from "react";
// import 'tailwindcss/tailwind.css';
import Header from "../COMPONENTES/header.jsx";
import { useCart } from "../hooks/useCart.js";
import { Link } from "react-router-dom";

function CartPage() {
  const { cart, addToCart, removeOneItemFromCart, removeFromCart } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/users/" + URLName
        );
        const json = await response.json();
        if (response.ok) {
          setStoreInfo(json);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="p-4">
        {cart ? (
          <>
            {cart.map((product) => (
              <Link
                key={product._id}
                to={"/product/" + product.URLName}
                className=""
              >
                <h2 className="text-2xl font-bold">{product.name}</h2>
              </Link>
            ))}
            <Link to="processPayment">Comprar</Link>
          </>
        ) : (
          "No hay productos en el carrito de la compra"
        )}
      </div>
    </div>
  );
}

export default CartPage;
