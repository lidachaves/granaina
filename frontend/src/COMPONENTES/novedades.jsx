import React, { useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';

const CardCarousel = () => {
  const cards = [
    { id: 1, title: 'Tarjeta 1', content: 'Contenido de la tarjeta 1' },
    { id: 2, title: 'Tarjeta 2', content: 'Contenido de la tarjeta 2' },
    { id: 3, title: 'Tarjeta 3', content: 'Contenido de la tarjeta 3' },
    { id: 4, title: 'Tarjeta 4', content: 'Contenido de la tarjeta 4' },
    { id: 5, title: 'Tarjeta 5', content: 'Contenido de la tarjeta 5' },
    { id: 6, title: 'Tarjeta 6', content: 'Contenido de la tarjeta 6' },
    { id: 7, title: 'Tarjeta 7', content: 'Contenido de la tarjeta 7' },
    { id: 8, title: 'Tarjeta 8', content: 'Contenido de la tarjeta 8' },
  ];

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 200; 
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 200; 
    }
  };

  return (
    <div className="relative my-8 p-10">
          <h2 className="text-2xl font-bold mb-4 text-gray-700 relative">NOVEDADES</h2>
      <div className="flex overflow-x-auto" ref={scrollRef}>
        {cards.map(card => (
          <div key={card.id} className="flex-none w-64 bg-white shadow-md mx-4 my-2 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2">{card.title}</h2>
            <p className="text-gray-600">{card.content}</p>
          </div>
        ))}
      </div>
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition duration-300"
      >
        <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition duration-300"
      >
        <ChevronRightIcon className="h-6 w-6 text-gray-600" />
      </button>
    </div>
  );
};

export default CardCarousel;
