import React from 'react';

export default function Foods() {
    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-bold text-center mb-8">Welcome to Food World</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
                    <img src="/pizza.jpg" alt="Pizza" className="w-full h-48 object-cover" />
                    <div className="p-6">
                        <h2 className="text-xl font-semibold mb-2">Pizza</h2>
                        <p className="text-gray-700">Enjoy delicious pizzas with a variety of toppings!</p>
                    </div>
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
                    <img src="/burger.jpg" alt="Burgers" className="w-full h-48 object-cover" />
                    <div className="p-6">
                        <h2 className="text-xl font-semibold mb-2">Burgers</h2>
                        <p className="text-gray-700">Treat yourself with juicy burgers loaded with cheese and sauces.</p>
                    </div>
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
                    <img src="/sushi.jpg" alt="Sushi" className="w-full h-48 object-cover" />
                    <div className="p-6">
                        <h2 className="text-xl font-semibold mb-2">Sushi</h2>
                        <p className="text-gray-700">Experience the taste of authentic Japanese sushi rolls.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
