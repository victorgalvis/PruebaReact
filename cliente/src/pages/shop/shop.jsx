import React, { useState, useEffect } from 'react';
import { Product } from './product';
import { Link } from "react-router-dom";
import './shop.css';
import axios from 'axios';

const URI = 'http://localhost:3001/products/';

export const Shop = () => {
    const [products, setProducts] = useState([]);
    const [categoryId, setCategoryId] = useState(1); // Default category id

    useEffect(() => {
        getProducts();
    }, [categoryId]);

    const getProducts = async () => {
        try {
            const res = await axios.get(`${URI}categoria/${categoryId}`);
            setProducts(res.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }

    const handleCategoryChange = (categoryId) => {
        setCategoryId(categoryId);
    }

    return (
        <div className="shop">
            <div className="shopTitle">
                <h2>TIENDA ROPA</h2>
                <Link to="#" onClick={() => handleCategoryChange(1)}>Pantalones</Link>
                <Link to="#" onClick={() => handleCategoryChange(2)}>Camisas</Link>
                {/* Agrega más enlaces con otras categorías si es necesario */}
            </div>
            <div className="products"> 
                {products.map((product, index) => (
                    <Product key={index} data={product} />
                ))}
            </div>
        </div>
    );
};
