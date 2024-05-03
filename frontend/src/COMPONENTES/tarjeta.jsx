import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ productInfo }) => {
  return (

    <div className="flex flex-col bg-white shadow-md rounded-lg h-64">
      {productInfo.imageUrl ? (
        <img src={productInfo.imageUrl} alt={productInfo.title} className="w-full h-48 rounded-lg mb-2 rounded-t-md" />
      ) : (
        <div className="h-48 w-full bg-gray-300 rounded-t-md">{productInfo.title}</div>
      )}
      <div className="flex flex-col gap-2 p-2">
        <h2 className="text-lg font-semibold">{productInfo.name}</h2>
        {/* <p className="text-gray-600">{productInfo.content}</p> */}
        {/* <p className="text-sm text-gray-500 mt-2">{productInfo.description}</p> */}
        <Link className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600 transition duration-300 text-center" to={"product/" + productInfo.URLName}>
          Ver detalle
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
