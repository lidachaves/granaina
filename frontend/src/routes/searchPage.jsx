import React, { useState } from 'react';
import Header from '../COMPONENTES/header.jsx';

const products = [
    {
        id: 0,
        image: '/path/to/your/image/gg-1.jpg',
        title: 'Z Flip Foldable Mobile',
        price: 120,
    },
    {
        id: 1,
        image: '/path/to/your/image/hh-2.jpg',
        title: 'Air Pods Pro',
        price: 60,
    },
    {
        id: 2,
        image: '/path/to/your/image/ee-3.jpg',
        title: '250D DSLR Camera',
        price: 230,
    },
    {
        id: 3,
        image: '/path/to/your/image/aa-1.jpg',
        title: 'Headphones',
        price: 100,
    },
    {
        id: 4,
        image: '/path/to/your/image/bb-1.jpg',
        title: 'Audio Microphone',
        price: 230,
    },
    {
        id: 5,
        image: '/path/to/your/image/cc-1.jpg',
        title: 'Smart Watch',
        price: 100,
    },
];

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm)
    );

    return (
        <div className="App">
            <Header />
            <div className="container mx-auto p-4 flex">
                <div className="sidebar bg-gray-800 text-white p-4 w-1/4">
                    <div className="sidehead">
                        <div className="dots flex justify-between w-10">
                            <i className="fa-solid fa-circle"></i>
                            <i className="fa-solid fa-circle text-gray-600"></i>
                            <i className="fa-solid fa-circle"></i>
                        </div>
                        <hr className="my-4 border-gray-600" />
                    </div>
                    <div className="sidebody h-3/4">
                        <div className="searchbar mb-4">
                            <input
                                className="w-full p-2 text-black"
                                placeholder="Search..."
                                id="searchBar"
                                name="searchBar"
                                type="text"
                                onChange={handleSearch}
                            />
                            <i className="fa-solid fa-magnifying-glass glass"></i>
                        </div>
                    </div>
                    <div className="sidefoot">
                        <hr className="my-4 border-gray-600" />
                        <div className="social-icons flex space-x-4">
                            <i className="fa-brands fa-square-facebook"></i>
                            <i className="fa-brands fa-youtube"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-whatsapp"></i>
                        </div>
                    </div>
                </div>
                <div className="body w-3/4 p-4">
                    <div id="root" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredProducts.map((product) => (
                            <div key={product.id} className="box border p-4 rounded-lg shadow-lg">
                                <div className="img-box">
                                    <img className="images w-full h-48 object-cover" src={product.image} alt={product.title} />
                                </div>
                                <div className="bottom mt-4">
                                    <p>{product.title}</p>
                                    <h2 className="text-lg font-bold">${product.price}.00</h2>
                                    <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded">Add to cart</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchPage;
