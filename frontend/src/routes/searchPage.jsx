import React, { useState } from "react";
import Header from "../COMPONENTES/header.jsx";
import Footer from "../COMPONENTES/footer.jsx";

const products = [
  {
    id: 0,
    image: "/path/to/your/image/gg-1.jpg",
    title: "Z Flip Foldable Mobile",
    price: 120,
  },
  {
    id: 1,
    image: "/path/to/your/image/hh-2.jpg",
    title: "Air Pods Pro",
    price: 60,
  },
  {
    id: 2,
    image: "/path/to/your/image/ee-3.jpg",
    title: "250D DSLR Camera",
    price: 230,
  },
  {
    id: 3,
    image: "/path/to/your/image/aa-1.jpg",
    title: "Headphones",
    price: 100,
  },
  {
    id: 4,
    image: "/path/to/your/image/bb-1.jpg",
    title: "Audio Microphone",
    price: 230,
  },
  {
    id: 5,
    image: "/path/to/your/image/cc-1.jpg",
    title: "Smart Watch",
    price: 100,
  },
];

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/search/?query=" + searchTerm
      );
      const json = await response.json();
      if (response.ok) {
        setProducts(json);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => fetchData, []);

  const handleFetch = async (e) => {
    e.preventDefault();
    await fetchData();
    // setSearchTerm(e.target.value.toLowerCase());
  };

  const handleSearch = async (e) => {
    setSearchTerm(e.target.value);
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
            <form className="searchbar mb-4 relative" onSubmit={handleFetch}>
              <input
                className="w-full p-2 pr-8 text-black border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Search..."
                id="searchBar"
                name="searchBar"
                type="text"
                onChange={handleSearch}
              />
              <button
                type="submit"
                className="absolute inset-y-0 right-0 flex items-center px-3 bg-gray-200 rounded-r-lg"
              >
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 15l-5-5m5 0l-5 5m5-5V3a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2h7a2 2 0 002-2z"
                  ></path>
                </svg>
              </button>
            </form>
          </div>
        </div>
        <div className="body w-3/4 p-4">
          <div
            id="root"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {products.map((product) => (
              // <div
              //   key={product._id}
              //   className="box border p-4 rounded-lg shadow-lg"
              // >
              //   <div className="img-box">
              //     <img
              //       className="images w-full h-48 object-cover"
              //       src={product.image}
              //       alt={product.name}
              //     />
              //   </div>
              //   <div className="bottom mt-4">
              //     <p>{product.name}</p>
              //     {/* <h2 className="text-lg font-bold">${product.price}.00</h2> */}
              //     <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded">
              //       Add to cart
              //     </button>
              //   </div>
              // </div>
              <ProductCard key={product._id} productInfo={product} />
            ))}
          </div>
        </div>
      </div>
      {/*Seccion 2  Simple Grid*/}
      <section class="bg-white">
        <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div class="mx-auto max-w-3xl text-center">
            <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">
              Trusted by eCommerce Businesses
            </h2>

            <p class="mt-4 text-gray-500 sm:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              dolores laborum labore provident impedit esse recusandae facere
              libero harum sequi.
            </p>
          </div>

          <div class="mt-8 sm:mt-12">
            <dl class="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                <dt class="order-last text-lg font-medium text-gray-500">
                  Total Sales
                </dt>

                <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">
                  $4.8m
                </dd>
              </div>

              <div class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                <dt class="order-last text-lg font-medium text-gray-500">
                  Official Addons
                </dt>

                <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">
                  24
                </dd>
              </div>

              <div class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                <dt class="order-last text-lg font-medium text-gray-500">
                  Total Addons
                </dt>

                <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">
                  86
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SearchPage;
