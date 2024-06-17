import React from 'react';

const Banner = () => {
    return (
<section class="px-0 py-12 mx-auto max-w-7xl sm:px-4">
  <div class="grid items-center grid-cols-1 gap-10 px-4 py-6 overflow-hidden text-pink-900 bg-pink-100 border-pink-100 rounded-none card card-body sm:rounded-lg md:px-20 md:grid-cols-5 lg:gap-0">
    <div class="col-span-1 md:col-span-3">
      <h2 class="mb-3 font-serif text-2xl font-normal leading-tight lg:text-3xl">Trabaje con tranquilidad sabiendo que su tienda Online está optimizado al máximo.</h2>
      <p class="mb-6 text-sm font-semibold lg:text-base">Subscribete a nuestro Newsletter para recibir las ultimas novedades. Combinado con las herramientas de ventas para convertirlos en clientes de pago.</p>
      <a href="contacto.php" class="w-full text-pink-900 shadow-lg bg-pink-200 hover:bg-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 rounded-lg px-4 py-2 text-center font-bold text-lg transition duration-300 ease-in-out sm:w-auto">Empezar</a>

    </div>
    <div class="col-span-1 md:col-span-2 flex justify-center md:justify-end">
      <img src="public/Escritorio-removebg.png" class="w-full max-w-[300px] lg:max-w-[450px] select-none" alt="Mac App" />
    </div>
  </div>
</section>
    )
}

export default Banner;

