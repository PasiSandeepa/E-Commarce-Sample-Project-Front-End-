import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Product() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/Products/all')
            .then(response => {
                setProducts(response.data); 
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="row">
            {products.length === 0 ? (
                <p>Loading products...</p>
            ) : (
                products.map(product => (
                    <div className="col-sm-6 mb-3 mb-sm-0" key={product.id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.description}</p>
                                <p className="card-text">Price: ${product.price}</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

export default Product;
