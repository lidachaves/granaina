import { useState, useEffect } from "react";
import ProductCard from "../COMPONENTES/tarjeta.jsx";
// import 'tailwindcss/tailwind.css';
import Header from "../COMPONENTES/header.jsx";
import Login from "../COMPONENTES/LOGIN.jsx";
import Carousel from "../COMPONENTES/carousel.jsx";
import Offer from "../COMPONENTES/service.jsx";
import CardCarousel from "../COMPONENTES/novedades.jsx";
import Section from "../COMPONENTES/feactures.jsx";
import ProductCardLoading from "../COMPONENTES/productCardLoading.jsx";
import Footer from "../COMPONENTES/footer.jsx";

function AboutUs() {
  const links = [
    { name: "Open roles", href: "#" },
    { name: "Internship program", href: "#" },
    { name: "Our values", href: "#" },
    { name: "Meet our leadership", href: "#" },
  ];

  const stats = [
    { name: "Offices worldwide", value: "12" },
    { name: "Full-time colleagues", value: "300+" },
    { name: "Hours per week", value: "40" },
    { name: "Paid time off", value: "Unlimited" },
  ];

  return (
    <div className="App">
      <Header />
      <div className="relative isolate overflow-hidden bg-white-300 py-24 sm:py-32">
        <img
          src="https://www.obayashivn.com/Data/Sites/1/News/538/aeon_celadon_ext3.jpg"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
             Place your order
            </h2>
            <p className="mt-6 text-lg leading-8 text-white">
            El Parque Comercial Nevada, ubicado en Armilla, 
            ofrece una experiencia de compra completa con una gran 
            variedad de tiendas y productos para el hogar, 
            construcción y bricolaje. Aunque algunos visitantes han 
            expresado preocupación por la seguridad, destaca por su 
            amabilidad del personal y la limpieza. Con amplio espacio 
            y grandes ventanales, el centro comercial ofrece vistas 
            panorámicas a la sierra. También cuenta con un estacionamiento 
            amplio y opciones de restaurantes. A pesar de su tamaño, 
            algunos visitantes consideran que el diseño del centro comercial 
            podría ser más innovador. 
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-gray-300">
                    {stat.name}
                  </dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      {/* Seccion 2 Simple Grid */}
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Come and discober, that with our newsletter by subscribing you can find the 
              best items at a great price that you can not miss.
            </h2>

            <p className="mt-4 text-gray-500 sm:text-xl">
              Find the best items, that this city can give you, and renovate your home with 
              the best items that this city has to offer.
            </p>
          </div>

          <div className="mt-8 sm:mt-12">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">
                  Total Sales
                 
                </dt>
                

                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                  Articulos
                </dd>
                <button className="mt-4 w-auto mx-auto inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  View More
                </button>
                
                 
              </div>
              

              <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">
                  Wall covering 
                </dt>

                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                  Search
                </dd>
                <button className="mt-4 w-auto mx-auto inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  View More
                </button>
              </div>

              <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">
                  Aluminum window
                </dt>

                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                 Decoora 
                </dd>
                <button className="mt-4 w-auto mx-auto inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  View More
                </button>
              </div>
            </dl>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 py-8">
  <img 
    src="https://i.pinimg.com/736x/a7/aa/13/a7aa131412c052179a69385ec2fa5eca.jpg" 
    alt="Descripción de la imagen" 
    className="mx-auto w-1/2 h-auto rounded-md shadow-lg mt-8" 
  />
</div>
      {/* Seccion 2*/}
      <Footer />
    </div>
  );
}

export default AboutUs;