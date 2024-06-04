import React from 'react';

const OtherCards = () => {
  return (
    <div className="container mx-auto mt-8" id="other-cards">
      <div className="row flex flex-wrap justify-center">
        <div className="col-md-4 py-3 w-full md:w-1/3">
          <a href="#" className="group relative block bg-black">
            <img
              alt=""
              src="./public/C3.jpg"
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />
            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Hogar</p>
              <p className="text-xl font-bold text-white sm:text-2xl">Latest collection Up To 50% Off</p>
              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm text-white">
                    Descubre todo lo nesario para tu hogar. Contamos con una amplia variedad de productos para
                    para ti y el cuidado de tu familia. ¡No te lo pierdas!
                ¡No te lo pierdas!
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="col-md-4 py-3 w-full md:w-1/3">
          <a href="#" className="group relative block bg-black">
            <img
              alt=""
              src="./public/C1.jpg"
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />
            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Indumentaria</p>
              <p className="text-xl font-bold text-white sm:text-2xl">Latest collection Up To 50% Off</p>
              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm text-white">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores
                    quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="col-md-4 py-3 w-full md:w-1/3">
          <a href="#" className="group relative block bg-black">
            <img
              alt=""
              src="./public/C2.png"
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />
            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Electronica</p>
              <p className="text-xl font-bold text-white sm:text-2xl">Latest collection Up To 50% Off</p>
              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm text-white">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores
                    quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default OtherCards;
