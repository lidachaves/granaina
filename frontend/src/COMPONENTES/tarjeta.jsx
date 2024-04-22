import React from "react";
const ProductCard = ({ productInfo }) => {
  return (
    <div className="w-full md:w-1/3 p-4 font-ubuntu"> {/* Agregar la clase font-ubuntu */}
      <div className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8">
        <img
          className="w-full h-64 object-cover rounded-t-lg transition-transform duration-500 transform hover:scale-105"
          src="producto.jpg"
          alt="Producto"
        />
        <h2 className="text-xl font-bold mt-4">{productInfo.name}</h2>
        <p className="text-gray-700 text-base">{productInfo.price}</p>
        <p className="text-gray-700 text-base">{productInfo.description}</p>
        <button className="bg-f0f3f5 hover:bg-blue-500 text-333 font-bold py-2 px-4 rounded mt-4 transition duration-300 ease-in-out transform hover:scale-105 shadow-md">
          Añadir al carrito
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
