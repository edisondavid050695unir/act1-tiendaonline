import React, { useState } from 'react';
import { Carousel, Products, Searcher } from "../../components";
import slides from "../../data/sliderData";
import productsData from '../../data/productsData';

const Home = ({setItemCount,  setTotalPrice}) => {
    const [products] = useState(productsData);
    const [filteredProducts, setFilteredProducts] = useState(productsData);
    const handleSearch = (searchTerm) => {
        const filtered = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    return (
        <div>
            <Carousel slides={slides} />
            <div className="products__header">
                <h2>Producto destacado</h2>
            </div>
            <Searcher onSearch={handleSearch} />
            <Products products={filteredProducts} setItemCount={setItemCount} setTotalPrice={setTotalPrice} />
        </div>
    );
};

export default Home;
