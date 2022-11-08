import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, service_name, img_url, description, price } = service
    return (

        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className='h-60' src={img_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{service_name}</h2>
                <p>{description.slice(0, 100) + '....'}</p>
                <div className="card-actions justify-between align-middle">
                    <p className='py-4 font-semibold '>Price: ${price}</p>
                    <Link to={`/services/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;