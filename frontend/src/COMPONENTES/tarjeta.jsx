import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import DetailsProduct from "../routes/detailsproduct.jsx"; 

const ProductCard = ({ productInfo }) => {
  const { cart, addToCart, removeOneItemFromCart, removeFromCart } = useCart();
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const cartProduct = cart.find((product) => {
    return product._id === productInfo._id;
  });

  const handleAddToCart = () => {
    addToCart(productInfo);
  };

  const handleRemoveOneItemFromCart = () => {
    removeOneItemFromCart(productInfo);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(productInfo);
  };

  const handleOpenDetails = () => {
    setIsDetailsOpen(true);
  };

  const handleCloseDetails = () => {
    setIsDetailsOpen(false);
  };

  return (
    <div className="flex flex-col bg-white shadow-md rounded-lg h-64">
      {productInfo.imageUrl ? (
        <img
          src={productInfo.imageUrl}
          alt={productInfo.title}
          className="w-full h-48 rounded-lg mb-2 rounded-t-md"
        />
      ) : (
        <div className="h-48 w-full bg-gray-300 rounded-t-md">
          {productInfo.title}
        </div>
      )}
      <div className="flex flex-col gap-2 p-2">
        <h2 className="text-lg font-semibold">{productInfo.name}</h2>
        <button
          className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600 transition duration-300 text-center"
          onClick={handleOpenDetails}
        >
          Ver detalle
        </button>
        {cartProduct ? (
          <>
            <div className="flex gap-4 items-center">
              <button
                className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600 transition duration-300 text-center"
                onClick={handleAddToCart}
              >
                +
              </button>
              {cartProduct.quantity}
              <button
                className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600 transition duration-300 text-center disabled:bg-gray-300"
                onClick={handleRemoveOneItemFromCart}
                disabled={cartProduct.quantity <= 1}
              >
                -
              </button>
            </div>
            <button onClick={handleRemoveFromCart}>Eliminar</button>
          </>
        ) : (
          <button onClick={handleAddToCart}>Añadir</button>
        )}
      </div>
      <DetailsProduct isOpen={isDetailsOpen} onClose={handleCloseDetails} />
    </div>
  );
};

export default ProductCard;
