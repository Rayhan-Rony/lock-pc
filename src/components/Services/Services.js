import React from 'react';
import { useLoaderData } from 'react-router-dom';
import UseTitle from '../../layout/hooks/UseTitle';
import ServiceCard from './ServiceCard';

const Services = () => {
    const services = useLoaderData()
    UseTitle('Services')
    return (
        <div className=' grid lg:grid-cols-3 md:grid-cols-1 gap-4'>

            {

                services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
            }

        </div>
    );
};

export default Services;