import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Products() {
    const [products, setProducts] = useState(null);
    const [error, setError] = useState(null)

    const url = "http://localhost:4000/api/products";

    const fetchProducts = async () => {
        try {
            const res = await axios.get(url);
            const data = await res.data;
            console.log(data);
            setProducts(data)
        } catch (err) {
            console.error('Error fetching data: ', err);
            setError('Failed to load products. Please try again later.')
        }
    };


    // useEffect to run fetchProducts when component mounts:
    useEffect(() => {
        fetchProducts();
    }, []);

    // if (!product) return <h1>Loading ...</h1>

    // Function to render products when data is loaded
    const loaded = () => {
        return (
            <div className='p-6'>
                <h1 className='text-3xl font-bold text-gray-800 mb-6'>Product Listings</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                    {products.map((product) => {
                        const { _id, name, category, description, price, imageUrl } = product;
                        return (
                            <div key={_id} className='border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105'>
                                <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h1 className="text-lg font-bold text-gray-800">
                                        Name: {name}
                                    </h1>
                                    <h2 className="text-sm text-gray-600">
                                        Category: {category}
                                    </h2>
                                    <p className="text-sm text-gray-700 mt-2 line-clamp-2">
                                        Description: {description}
                                    </p>
                                    <h2 className="text-xl font-semibold text-green-600 mt-2">
                                        Price: ${price}
                                    </h2>
                                    <Link
                                        to={`/products/${_id}`} className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">View Details</Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    };

    // Function to render a loading message
    const loading = () => {
        return (
            <div className="flex justify-center items-center h-screen">
                <h1 className="text-2xl font-bold text-gray-600">Loading...</h1>
            </div>
        )
    };

    // Render error message if there's an error
    if (error) {
        return (
            <div className="flex justify-center items-center h-screen">
                <h1 className="text-red-500 text-lg font-bold">{error}</h1>
            </div>
        )
    }

    // Render products or loading message
    return products ? loaded() : loading();
}

export default Products;
