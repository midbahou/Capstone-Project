import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function EditProduct() {
    const { id } = useParams();
    // set to hold product data
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: 0,
        category: '',
        imageUrl: '',
    });
    const [loading, setLoading] = useState(true);
    // const url = "http://localhost:5000/api/products"

    // fetch product details to edit an existing product
    const fetchProduct = async () => {
        try {
            if (id) {
                const res = await axios.get(`http://localhost:4000/api/products/${id}`);
                setProduct(res.data);
                setLoading(false);
            }
        } catch (err) {
            console.error("Error fetching product details: ", err);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (id) {
            fetchProduct();
        } else {
            setLoading(false)
        }
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <h1 className="text-2xl font-bold text-gray-600">Loading...</h1>
            </div>
        )
    }


    // handle input changes dynamically
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    // handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (id) {
                // update existing product
                await axios.patch(`http://localhost:4000/api/products/${id}`, product);
                alert('Product Updated Successfully!');
            } else {
                // create new product
                await axios.post(`http://localhost:4000/api/products`, product);
                alert('Product Added Successfully!')
            }
            window.location.href = '/products'; // redirect to products list
        } catch (err) {
            console.error("Error updating product: ", err);
            alert('Failed to update product. Please try again.')
        }
    };

    // render input field
    const fields = [
        { label: "Name", name: "name", type: "text" },
        { label: "Description", name: "description", type: "textarea" },
        { label: "Price", name: "price", type: "number" },
        { label: "Category", name: "category", type: "text" },
        { label: "Image URL", name: "imageUrl", type: "text" },
    ];

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">{id ? 'Edit Product' : 'Add New Product'}</h1>

            <form onSubmit={handleSubmit} className="space-y-4">
                {fields.map((field) => (
                    <div key={field.name}>
                        <label htmlFor={field.name} className='block text-gray-700'>
                            {field.label}:
                        </label>
                        {field.type === 'textarea' ? (
                            <textarea
                                id={field.name}
                                name={field.name}
                                value={product[field.name]}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                required
                            />
                        ) : (
                            <input
                                type={field.type}
                                id={field.name}
                                name={field.name}
                                value={product[field.name]}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                required
                            />
                        )}
                    </div>
                ))}


                <button
                    type="submit"
                    className='px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors cursor-pointer'
                >
                    {id ? 'Update Product' : 'Add Product'}
                </button>
            </form>
        </div>
    )
}

export default EditProduct
