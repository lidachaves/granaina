import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faRotateLeft, faTruck, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

export default function Offer() {
  return (
    <div className="container mt-20" id="offer">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="py-3">
          <FontAwesomeIcon icon={faCartShopping} className="text-blue-500 text-4xl mx-auto mb-2" />
          <h3 className="text-lg font-bold">Free Shipping</h3>
          <p>En pedidos superiores a $1000</p>
        </div>
        <div className="py-3">
          <FontAwesomeIcon icon={faRotateLeft} className="text-green-500 text-4xl mx-auto mb-2" />
          <h3 className="text-lg font-bold">Free Returns</h3>
          <p>En 30 dias</p>
        </div>
        <div className="py-3">
          <FontAwesomeIcon icon={faTruck} className="text-yellow-500 text-4xl mx-auto mb-2" />
          <h3 className="text-lg font-bold">Fast Delivery</h3>
          <p>Global</p>
        </div>
        <div className="py-3">
          <FontAwesomeIcon icon={faThumbsUp} className="text-purple-500 text-4xl mx-auto mb-2" />
          <h3 className="text-lg font-bold">Big choice</h3>
          <p>Recomendados</p>
        </div>
      </div>
    </div>
  );
}
