import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  const [quote, setQuote] = useState("");

  const fetchQuote = async () => {
    try {
      const res = await fetch("https://api.quotable.io/random");
      const data = await res.json();
      console.log(data);
      setQuote(data)
    } catch (err) {
      console.error("Error fetching Quote data: ", err);

    }
  };

  useEffect(() => {
    fetchQuote();
  }, [])

  return (


    <div className='min-h-screen bg-gray-100 flex flex-col items-center justify-center relative'>
      {/* Main content */}
      <h1 className='text-5xl font-bold text-gray-800 mb-6'>Welcome to My Marketplace</h1>
      <p className='text-xl text-gray-600 mb-8'>Find the best products at unbeatable prices!</p>
      <Link
        to="/products"
        className='px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors'
      >
        view Products
      </Link>

      {/* Quote of the Day */}
      <div className='absolute bottom-15 left-1/2 transform -translate-x-1/2 text-center'>
        <hr />
        <h1 className="text-lg font-semibold text-gray-700">Quote Of The Day:</h1>
        <h2 className="text-base text-gray-600">"{quote.content}"</h2>
        <p className="text-sm text-gray-500"><i>-{quote.author}</i></p>
      </div>
    </div>


  )
}

export default HomePage
