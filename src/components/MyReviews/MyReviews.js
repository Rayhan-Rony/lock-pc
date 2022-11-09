import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import MySingleReview from './MySingleReview';

const MyReviews = () => {
    const { user } = useContext(AuthContext)
    const [myReviews, setMyReviews] = useState([])
    // console.log(user)
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [])
    // console.log(myReviews)
    return (
        <div>
            <h1 className='text-3xl font-extrabold  text-center my-4'>Here Is Your Reviews!!!</h1>
            {
                myReviews?.map(myReview => <MySingleReview key={myReview._id} myReview={myReview}></MySingleReview>)
            }
        </div>
    );
};

export default MyReviews;