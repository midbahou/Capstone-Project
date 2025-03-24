import React, { useState } from 'react'

function CartPage() {
    const[cartItems, setCartItems] = useState([
        {id:1, name:"Wireless Headphones", price: 199.99, quantity: 2 },
        {id:2, name:"Smart Fitness Tracker", price: 49.99, quantity: 1 },
    ]);

    // Handle Calculate the Total amount
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
    };

    // Handle Remove Items
    const handleRemoveItem = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id));
    };

    console.log(cartItems);
    
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
            <div className="space-y-4">
                {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between items-center border-b pb-4">
                        <div>
                            <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
                            <p className="text-gray-600">Price: ${item.price} * {item.quantity} = ${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                        <button 
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-red-500 hover:text-red-700 cursor-pointer"
                        >
                            Remove
                        </button>
                    </div>
            ))}
            </div>

            <div className="mt-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800">Total: ${calculateTotal()}</h2>
                <button className="px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600 transition-colors cursor-pointer">
                    Proceed to Checkout
                </button>
            </div>
        </div>
      )}

    </div>
  )
}

export default CartPage;
