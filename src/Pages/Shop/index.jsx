import React from 'react';
import { NavigateProducts, Products, Searcher } from '../../components'
import products from '../../data/productsData';

const Shop =()=> {


    return (
        <div>
            <NavigateProducts/>
            <Searcher/>
            <Products products={products} />
        </div>
    );
}

export default Shop;
