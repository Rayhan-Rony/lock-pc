import React from 'react';

const ServicesDemo = ({ service }) => {
    const { service_name, img_url, title } = service;
    return (

        <div className="card card-compact text-center w-96 bg-base-100 ">
            <figure><img className='h-60 rounded-2xl' src={img_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="font-bold text-lg">{service_name}</h2>
                <p>{title}</p>

            </div>

        </div>
    );
};

export default ServicesDemo;