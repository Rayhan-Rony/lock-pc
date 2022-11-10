import { data } from 'autoprefixer';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import UseTitle from '../../layout/hooks/UseTitle';

const AddService = () => {
    const services = useLoaderData()
    const servicesCount = services.length
    console.log(servicesCount)
    UseTitle('Add Services')
    const handleAddService = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const id = form.id.value;
        const photo = form.photo.value;
        const title = form.title.value;
        const description = form.description.value;
        const price = form.price.value;
        // console.log(name, id, photo, title, description, price)
        if (id <= servicesCount) {
            return toast.error(`Service Id must be large than ${servicesCount}`)
        }

        const service = {
            service_id: id,
            service_name: name,
            title: title,
            img_url: photo,
            description: description,
            price: price
        }
        fetch(`https://lock-pc-server.vercel.app/services`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => console.log(data))
        // console.log(service)
        toast.success('Service Added Succesfully')
        form.reset()
    }
    return (
        <form onSubmit={handleAddService}>

            <div className="hero-content flex-col lg:flex-row-reverse w-full mx-auto">
                <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100 p-28">
                    <h1 className="text-3xl font-bold text-center">ADD A SERVICE</h1>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Enter Service Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service Id</span>
                            </label>
                            <input type="text" name='id' placeholder="Enter Service Id" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="Enter Your Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service Title</span>
                            </label>
                            <input type="text" name='title' placeholder="Enter Service Title" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" name='description' placeholder="Enter Service Description" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service Price</span>
                            </label>
                            <input type="text" name='price' placeholder="Enter Service Price" className="input input-bordered" required />

                        </div>
                        <div className='text-red-400'>
                            {/* <p>{error}</p> */}
                        </div>
                        <div className="form-control mt-6">

                            <button type='submit' className="btn btn-primary">ADD SERVICE</button>

                        </div>


                    </div>
                </div>
            </div>
        </form>
    );
};

export default AddService;