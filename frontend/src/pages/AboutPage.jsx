import React from 'react'

function AboutPage() {
  return (
       <div className="p-6">
            {/* Header Section */}
            <header className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
                <p className="text-xl text-gray-600 mt-2">
                    Connecting Buyers and Sellers in a Seamless Way
                </p>
            </header>

            {/* Mission Section */}
            <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
                <p className="text-gray-700">
                    Our mission is to empower small businesses by providing a user-friendly marketplace where buyers and sellers can connect effortlessly. We believe in fostering trust, transparency, and innovation in every transaction.
                </p>
            </section>

            {/* How It Works Section */}
            <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">How It Works</h2>
                <ul className="list-disc list-inside text-gray-700">
                    <li>Sellers list their products with detailed descriptions and images.</li>
                    <li>Buyers browse and purchase products securely.</li>
                    <li>Transactions are processed through our secure payment gateway.</li>
                </ul>
            </section>

            {/* Meet the Team Section */}
            <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Meet the Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                        <img
                            src="https://img.freepik.com/free-vector/mans-face-flat-style_90220-2877.jpg?t=st=1742928691~exp=1742932291~hmac=d4d364dbaa1d88f788164093de99a59ef5293b624b007fa49b696c5595811329&w=740"
                            alt="John Doe"
                            className="w-32 h-32 rounded-full mx-auto mb-4"
                        />
                        <h3 className="text-lg font-bold text-gray-800">John Doe</h3>
                        <p className="text-gray-600">Founder & CEO</p>
                    </div>
                    <div className="text-center">
                        <img
                            src="https://img.freepik.com/free-vector/woman-with-long-brown-hair-pink-shirt_90220-2940.jpg?t=st=1742928646~exp=1742932246~hmac=35f223fe44c690e0b9b4d080709aa4ca0db5f7fef333014fd4a142c9e22b7f2e&w=740"
                            alt="Jane Smith"
                            className="w-32 h-32 rounded-full mx-auto mb-4"
                        />
                        <h3 className="text-lg font-bold text-gray-800">Jane Smith</h3>
                        <p className="text-gray-600">Lead Developer</p>
                    </div>
                    <div className="text-center">
                        <img
                            src="https://img.freepik.com/free-vector/blond-man-with-eyeglasses-icon-isolated_24911-100831.jpg?t=st=1742928727~exp=1742932327~hmac=d47c42208875e784c4b6a56c153ed3226e93dffbf38181142811ba2f4f665dd3&w=740"
                            alt="Alex Johnson"
                            className="w-32 h-32 rounded-full mx-auto mb-4"
                        />
                        <h3 className="text-lg font-bold text-gray-800">Alex Johnson</h3>
                        <p className="text-gray-600">UI/UX Designer</p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Get in Touch</h2>
                <p className="text-gray-700">
                    Have questions or feedback? Reach out to us:
                </p>
                <ul className="list-disc list-inside text-gray-700">
                    <li>Email: support@yourmarketplace.com</li>
                    <li>Phone: +1 (123) 456-7890</li>
                    <li>Follow us on [Facebook] | [Twitter] | [Instagram]</li>
                </ul>
            </section>
    </div>
  )
}

export default AboutPage
