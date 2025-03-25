import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchQuote = async () => {
    try {
      const res = await fetch("https://api.quotable.io/random");
      const data = await res.json();
      console.log(data);
      setQuote(data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching Quote data: ", err);
setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!quote) return <p>Quote not found.</p>;

  return (


    <div className='min-h-screen bg-gray-100 flex flex-col items-center justify-center relative'>
      <div className='absolute top-0 w-full h-64'>
        <img 
        src="https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Marketplace image"
        className='w-full h-full object-cover'
         />
      </div>
      {/* Main content */}
      <h1 className='text-5xl font-bold text-gray-800 mb-6'>Welcome to My Marketplace</h1>
      <p className='text-xl text-gray-600 mb-8'>Find the best products at unbeatable prices!</p>
      <Link
        to="/products"
        className='px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 
             text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300'
      >
        view Products
      </Link>

      {/* Quote of the Day */}
      <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center bg-white p-4 rounded-lg shadow-md'>
        <hr className='mb-2 border-gray-300 w-1/3 mx-auto'/>
        <h1 className="text-lg font-semibold text-gray-700">Quote Of The Day:</h1>
        <h2 className="text-xl italic text-gray-800">"{quote.content}"</h2>
        <p className="text-sm text-gray-500 mt-1"><i>-{quote.author}</i></p>
      </div>
    </div>


  )
}

export default HomePage
