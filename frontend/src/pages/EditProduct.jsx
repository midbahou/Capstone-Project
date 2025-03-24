import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function EditProduct() {
    const { id } = useParams();
    const [ product, setProduct ] = useState({
        name: '',
        description: '',
        price: 0,
        category: '',
        imageUrl: '',
    });
    const [loading, setLoading] = useState(true);
    const url = "http://localhost:5000/api/products"

    const fetchProduct = async () => {
        try {
            const res = await axios.get(`${url}/${id}`);
            setProduct(res.data);
            setLoading(false);
        } catch (err) {
            console.error("Error fetching product details: ", err);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (id) {
            fetchProduct();
        } else {
            setLoading(false);
        }
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
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setProduct({...product, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`${url}/${id}`, product);
            alert('Product updated successfully!');
            window.location.href = '/products'; // redirect to products list
        } catch (err) {
            console.error("Error updating product: ", err);
            alert('Failed to update product. Please try again.')
        }
    }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Edit Product {product.name}</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Name:</label>
            <input 
            type="text"
            id='name'
            value={product.name}
            onChange={handleChange}
            className='w-md px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500'
            required
            />

            {/* <label htmlFor="description">description:</label>
            <input 
            type="text" 
            id='description'
            value={product.description}
            onChange={handleChange}
            className='w-md px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500'
            required
            /> */}
        </div>

        <button
        type="submit"
        className='px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors cursor-pointer'
        >
            Save Changes
        </button>
      </form>
    </div>
  )
}

export default EditProduct
