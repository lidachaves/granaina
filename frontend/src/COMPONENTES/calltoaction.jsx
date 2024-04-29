import React from 'react';

const CallToAction = () => {
  return (
    <div className="max-w-7xl bg-white rounded-lg overflow-hidden shadow-md relative mx-auto h-80 border border-black">
      <video autoPlay loop muted className="w-full h-full absolute inset-0 object-cover z-0">
        <source src="./public/tr.mp4" type="video/mp4" />
        Tu navegador no soporta la reproducción de videos.
      </video>
      <div className="flex items-center justify-center h-full relative z-10 text-center p-8 mt-20">
      <div className="mr-auto">
      <button className="bg-white bg-opacity-20 backdrop-blur-lg text-white-500 hover:bg-opacity-30 hover:text-white px-6 py-3 rounded-xl hover:bg-yellow-200 transition duration-300 ease-in-out border border-yellow-500">Shop Now 🛒</button>
  </div>
      </div>
    </div>
  );
};

export default CallToAction;
