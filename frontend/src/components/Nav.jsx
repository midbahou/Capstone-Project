import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center px-4">
                {/* Logo or Brand Name */}
                <div className="text-xl font-bold text-white">
                    <Link to="/">Marketplace</Link>
                </div>

                {/* Navigation Links */}
                <div className="flex space-x-6">
                    <Link
                        to="/"
                        className="hover:text-gray-300 font-bold transition-colors"
                    >
                        Home
                    </Link>


                    <Link
                        to='/products'
                        className="hover:text-gray-300 font-bold transition-colors"
                    >
                        Products
                    </Link>

                    <Link
                        to='/about'
                        className="hover:text-gray-300 font-bold transition-colors"
                    >
                        About
                    </Link>

                    <Link
                        to='/cart'
                        className="hover:text-gray-300 font-bold transition-colors"
                    >
                        Cart
                        {/*  Add a badge for cart item count */}
                        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                            2 {/* Replace with dynamic cart item count */}
                        </span>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav
