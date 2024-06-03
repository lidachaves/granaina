import React from 'react';

function DetailsProduct({ isOpen, onClose }) {
  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ${isOpen ? '' : 'hidden'}`}>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Detalle del Producto</h2>
        <p className="text-gray-700 mb-4">Aquí puedes agregar la información detallada sobre el producto.</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={onClose}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}

export default DetailsProduct;
