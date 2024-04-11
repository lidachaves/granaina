import React from 'react';
import './style.css';

const ProductCard = () => {
    return (
        <div className="ProductCard">
            <img src="" alt="Producto" />
            <h2>NOMBRE PRODUCTO</h2>
            <p className="price">9.99</p>
            <p>Descripción del producto</p>
            <button className="btn">Comprar</button>
        </div>
    );
}

export default ProductCard;