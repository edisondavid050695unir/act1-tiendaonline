import React from 'react';
import './Products.css'; // Asegúrate de que este archivo exista y esté correctamente vinculado

const Products = ({ products }) => {
    return (
        <div className="products">
            <div className="products__grid">
                {products.map(product => (
                    <div className="product__card" key={product.id}>
                        <img src={product.urlImage} alt={product.name} />
                        <h5>{product.name}</h5>
                        <p className="product__description">{product.description}</p>
                        <p>${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
