import React from 'react';

const PurchaseTimeline = () => {
    const steps = [
        { number: '1', title: 'Ordered', description: 'Seleccione los productos que desea comprar.' },
        { number: '2', title: 'Processing', description: 'Confirme su compra y seleccione el método de pago.' },
        { number: '3', title: 'Shipped', description: 'Realice el pago de su compra.' },
        { number: '4', title: 'Delivered', description: 'Su pedido ha sido enviado.' }
    ];

    return (
        <div className="max-w-4xl mx-auto py-6 px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Your purchase in simple steps</h2>
            <div className="relative">
                {/* Steps */}
                {steps.map((step, index) => (
                    <div key={index} className={`flex items-start mb-6 ${index === 0 ? 'justify-end' : index === 1 ? 'justify-start' : index === steps.length - 1 ? 'justify-start' : 'justify-end'}`}>
                        {/* Step Number */}
                        <div className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full mr-4">{step.number}</div>
                        {/* Step Content */}
                        <div className="w-64 bg-white rounded-lg p-4 shadow-md">
                            <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                            <p className="text-sm">{step.description}</p>
                        </div>
                    </div>
                ))}
                {/* Timeline */}
                <div className="border-l-2 border-gray-300 absolute h-full top-0 left-1/2 transform -translate-x-1/2"></div>
            </div>
        </div>
    );
}

export default PurchaseTimeline;
