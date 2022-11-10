import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServicesDemo = ({ service }) => {
    const { _id, service_name, img_url, title } = service;
    return (

        <div className="card card-compact text-center w-96 bg-base-100 ">
            <figure>
                <PhotoProvider>
                    <PhotoView src={img_url}>
                        <img className='h-60 rounded-2xl' src={img_url} alt="Shoes" />
                    </PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body">
                <h2 className="font-bold text-lg">{service_name}</h2>
                <p>{title}</p>

            </div>
            <Link to={`/services/${_id}`}><button className=" btn btn-outline hover:btn-primary">View Details</button></Link>
        </div>
    );
};

export default ServicesDemo;