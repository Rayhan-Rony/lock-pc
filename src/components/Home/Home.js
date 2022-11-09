import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import UseTitle from '../../layout/hooks/UseTitle';
import Banner from './Banner';
import ServicesDemo from './ServicesDemo';


const Home = () => {
    const services = useLoaderData()
    UseTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <h1 className='text-4xl text-center font-medium mt-12'>Services</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-1 gap-4 mt-10'>
                {
                    services.map(service => <ServicesDemo key={service._id} service={service}></ServicesDemo>)
                }
            </div>
            <div className="text-center mt-4">

                <Link to='/services'> <button className="btn btn-primary text-lg">See All Services</button></Link>
            </div>

        </div>
    );
};

export default Home;