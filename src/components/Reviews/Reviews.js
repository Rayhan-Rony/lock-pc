import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview';

const Reviews = ({ reviews }) => {
    // const { service_id } = service_id
    // console.log(service_id)
    // const [reviews, setReviews] = useState()
    // useEffect(() => {
    //     fetch(`http://localhost:5000/reviews/${service_id}`)
    //         .then(res => res.json())
    //         .then(data => setReviews(data))
    // }, [service_id])
    console.log(reviews)
    return (
        <div className='mt-5'>
            <h1 className='text-3xl text-center font-bold mb-4'>What Client Says</h1>
            {
                reviews?.map(review => <SingleReview key={review._id} review={review}></SingleReview>)
            }
        </div>
    );
};

export default Reviews;