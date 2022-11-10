import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import UseTitle from '../../layout/hooks/UseTitle';
import Reviews from '../Reviews/Reviews';


const ServiceDetails = () => {
    const { user } = useContext(AuthContext)
    const service = useLoaderData()
    UseTitle('Service-Details')
    const [reviews, setReviews] = useState([])
    const [loader, setLoader] = useState(true)
    const { service_name, img_url, description, price, service_id } = service

    useEffect(() => {
        fetch(`https://lock-pc-server.vercel.app/reviews/${service_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [service_id, loader])


    const handleReview = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        const { photoURL } = user
        const reviewer = {
            name: name,
            email: email,
            message: message,
            photo: photoURL,
            service_id: service_id,
            service_name: service_name
        }
        fetch('https://lock-pc-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewer)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setLoader(false)
                }

            })

        form.reset()
        toast.success('Reviews Added Successfully')
        setLoader(true)
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
            <Reviews reviews={reviews}></Reviews>
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