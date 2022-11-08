import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Reviews from '../Reviews/Reviews';


const ServiceDetails = () => {
    const service = useLoaderData()
    const { service_name, img_url, description, price } = service
    console.log(service)
    return (
        <div>
            <div className="card card-compact  bg-base-100 mt-20 shadow-xl border">
                <figure><img className='' src={img_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-center text-3xl font-bold">{service_name}</h2>
                    <p className='text-xl'>{description}</p>
                    <div className="card-actions justify-between align-middle">
                        <p className='py-4 text-xl font-extrabold '>Price: ${price}</p>

                    </div>
                </div>
            </div>
            <Reviews></Reviews>
            <div className='text-end mt-2'>
                <Link to='/login'><button className="btn btn-primary ">Please Log in to add your Review</button></Link>
            </div>
        </div>
    );
};

export default ServiceDetails;