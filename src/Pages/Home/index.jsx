import React from 'react';
import { Carousel, Products, Searcher } from "../../components";
import slides from "../../data/sliderData";
import products from '../../data/productsData';

const  Home =()=> {
    return (
        <div>
            
            <Carousel slides={slides} />
            <div className="products__header">
                <h2>Producto destacado</h2>
            </div>
            <Searcher/>
            <Products products={products} />
        </div>
    );
}

export default Home;
