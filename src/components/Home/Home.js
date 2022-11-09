import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import UseTitle from '../../layout/hooks/UseTitle';
import Banner from './Banner';
import ServicesDemo from './ServicesDemo';
import mechanicalImg from '../../assets/Mechanical-Engineer.jpg'
import toast from 'react-hot-toast';


const Home = () => {
    const services = useLoaderData()
    UseTitle('Home')

    const handleMessage = e => {
        e.preventDefault()
        const form = e.target
        toast.success('Message Send Succesfully')
        form.reset()
    }
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
            <div className='my-20'>
                <h2 className='text-3xl font-bold text-center mb-10'>Upcoming Service</h2>
                <div className="">
                    <div className="hero-content flex-col  lg:flex-row">
                        <img className='rounded-md' src={mechanicalImg} alt='' />
                        <div className='ml-10'>
                            <h1 className="text-5xl font-bold">Mechanical Service</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <h2 className='text-3xl font-bold mb-10'>You Can Send Your Message Directly Here</h2>
                <form className='w-1/2 mx-auto' onSubmit={handleMessage} >

                    <input type="text" placeholder="Type here your name" className="input input-bordered w-full mb-2 " required /> <br />
                    <input type="email" placeholder="Type here your email" className="input input-bordered w-full  mb-2" required /> <br />
                    <textarea className="textarea textarea-bordered mb-2 w-full" placeholder="Type here your message" required></textarea> <br />
                    <button type='submit' className="btn btn-primary">Send Message</button>
                </form>
            </div>

        </div>
    );
};

export default Home;