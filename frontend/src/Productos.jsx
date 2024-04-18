import React from 'react';

const Producto = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className="flex justify-between py-8">
        <h1 className="text-3xl font-bold">Productos</h1>
        <div className="relative cursor-pointer">
          {/* Icono de carrito */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 fill-current icon-cart"
            viewBox="0 0 24 24"
          >
            {/* Código del icono aquí */}
          </svg>
          {/* Contador de productos en el carrito */}
          <div className="absolute top-0 right-0 left-7 bg-black text-white w-6 h-6 flex justify-center items-center rounded-full">
            <span className="text-xs" id="contador-productos">0</span>
          </div>
          {/* Contenedor del carrito de compras */}
          <div className="absolute top-16 right-0 hidden-cart">
            {/* Contenido del carrito de compras */}
          </div>
        </div>
      </header>

      {/* Contenedor de los productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Productos aquí */}
      </div>

      {/* Botones de paginación */}
      <div className="flex justify-center mt-8">
        <button className="pagination-button">{'< Back'}</button>
        <button className="pagination-button"> {' Next >'}</button>
      </div>
    </div>
  );
};

export default Producto;
