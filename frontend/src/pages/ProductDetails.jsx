import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'

function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const url = "http://localhost:4000/api/products"

    const fetchProduct = async () => {
        try {
            const res = await axios.get(`${url}/${id}`);
            const data = await res.data;
            console.log("Product details: ", data)
            setProduct(data);
            setLoading(false)
        } catch (err) {
            console.error('Error fetching product details: ', err);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProduct();
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <h1 className="text-2xl font-bold text-gray-600">Loading...</h1>
            </div>
        )
    }

    if (!product) {
        return (
            <div className="flex justify-center items-center h-screen">
                <h1 className="text-2xl font-bold text-gray-600">Product not found</h1>
            </div>
        )
    }
    return (
        <div className='p-6'>
            <h1 className='text-3xl font-bold text-gray-800 mb-6'>{product.name}</h1>
            <div className='flex flex-col md:flex-row gap-6'>
                <img src={product.imageUrl} alt={product.name} className='w-full md:w-1/2 h-96 object-cover' />
                <div className='flex-1'>
                    <p className='text-gray-700 mb-4'><b>Product Description: </b>{product.description}</p>
                    <p className='text-xl font-bold text-green-600 mb-4'><b>Price: </b>${product.price}</p>
                    <p className='text-gray-600 mb-4'><b>Category: </b>{product.category}</p>
                    <button className='px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors cursor-pointer'>Add to Cart</button>
                </div>
            </div>


        </div>
    )
}

export default ProductDetails
