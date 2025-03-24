import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {

  return (
    <div className='min-h-screen bg-gray-100 flex flex-col items-center justify-center'>
      <h1 className='text-5xl font-bold text-gray-800 mb-6'>Welcome to My Marketplace</h1>
      <p className='text-xl text-gray-600 mb-8'>Find the best products at unbeatable prices!</p>
      <Link
      to="/products"
      className='px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors'
      >view Products</Link>
    </div>
  )
}

export default HomePage
