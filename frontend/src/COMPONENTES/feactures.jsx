import React from 'react'

const features = [
    { name: 'Original', description: 'Designed by Good Goods, Inc.' },
    { name: 'Madera', description: 'ullamco ut sint duis proident non adipisicing. Voluptate ' },
    { name: 'Ceramica', description: '6.25" x 3.55" x 1.15"' },
    { name: 'Cuero', description: 'ullamco ut sint duis proident non adipisicing. Voluptate ' },
    { name: 'Vidrio', description: 'ullamco ut sint duis proident non adipisicing. Voluptate ' },
    { name: 'Consideraciones', description: 'Made from natural materials. Grain and color vary with each item.' },
  ]
  
  export default function Section() {
    return (
      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nuestros productos</h2>
            <p className="mt-4 text-gray-500">
            Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim laborum laborum.
            Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim.
            </p>
  
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              src="public/producto3.jpeg"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="public/ejem3.jpg"
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="public/producto4.jpg"
              alt="Side of walnut card tray with card groove and recessed card area."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="public/producto2.jpg"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="rounded-lg bg-gray-100"
            />
          </div>
        </div>
      </div>
    )
  }
  