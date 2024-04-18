import React from 'react';

function Banner1() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full lg:w-11/12 xl:w-9/12 bg-blue-500 border border-solid border-gray-300 rounded-lg shadow-md p-8" style={{ paddingTop: '10%', paddingBottom: '10%' }}>
        <div className="flex justify-center items-center h-full flex-col">
          <h2 className="text-2xl font-semibold text-white mb-6">Banner Principal ⚙️</h2>
          <p className="text-white mb-4">Contenido del Banner</p>
        </div>
      </div>
    </div>
  );
}

export default Banner1;
