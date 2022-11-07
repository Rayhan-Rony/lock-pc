import React from 'react';

const ServiceCard = ({ service }) => {
    const { service_name, img_url, description, price } = service
    return (

        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className='h-60' src={img_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{service_name}</h2>
                <p>{description.slice(0, 100) + '....'}</p>
                <div className="card-actions justify-between align-middle">
                    <p className='py-4 font-semibold '>Price: ${price}</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;