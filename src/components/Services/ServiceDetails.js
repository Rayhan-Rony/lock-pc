import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import Reviews from '../Reviews/Reviews';


const ServiceDetails = () => {
    const { user } = useContext(AuthContext)
    const service = useLoaderData()
    const { service_name, img_url, description, price, service_id } = service
    // console.log(service) 

    const handleReview = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;
        // console.log(name, email, message, photoURL)
        const { photoURL } = user
        const reviewer = {
            name: name,
            email: email,
            message: message,
            photo: photoURL,
            service_id: service_id
        }
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewer)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        form.reset()
        toast.success('Reviews Added Successfully')
    }
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
            <Reviews service_id={service_id}></Reviews>
            <div >
                {
                    user ? <div className='mt-4'>
                        <h1 className='text-center font-bold text-3xl mb-4'>Add Your Review</h1>
                        <form onSubmit={handleReview}>
                            <input type="text" name='name' readOnly defaultValue={user?.displayName} className="input w-1/2 mb-3 input-bordered" />
                            <input type="email" name='email' readOnly defaultValue={user?.email} className="input w-1/2 mb-3  input-bordered" /><br />
                            <textarea name='message' className="textarea textarea-bordered w-full" placeholder="Type Your Review Here" required></textarea>
                            <div className='text-center'>  <button className="btn btn-primary " type='submit'>Add Review</button></div>
                        </form>

                    </div> : <div className='text-end mt-2'><Link to='/login'><button className="btn btn-primary ">Please Log in to add your Review</button></Link></div>
                }
            </div>
        </div >
    );
};

export default ServiceDetails;