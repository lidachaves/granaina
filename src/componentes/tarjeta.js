import React from 'react';

const ProductCard = () => {
    return (
        <div className="w-full md:w-1/3 p-4">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
                <img className="w-full" src=""alt="Producto" />
                <h2 className="text-xl font-bold mt-4">NOMBRE PRODUCTO</h2>
                <p className="text-gray-700 text-base">9.99</p>
                <p className="text-gray-700 text-base">Descripción del producto</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                    Comprar
                </button>
            </div>
        </div>
    );
}

export default ProductCard;
