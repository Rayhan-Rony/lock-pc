import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import UseTitle from '../../layout/hooks/UseTitle';
import MySingleReview from './MySingleReview';

const MyReviews = () => {
    const { user } = useContext(AuthContext)
    const [myReviews, setMyReviews] = useState([])
    UseTitle('My Reviews')
    // console.log(user)
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [user?.email])

    const handleDelete = (id) => {
        console.log(id)
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    const remaining = myReviews.filter(rv => rv._id !== id)
                    setMyReviews(remaining)
                }
            })

    }
    // console.log(myReviews)
    return (
        <div>
            {
                myReviews.length === 0 ? <h1 className='text-3xl font-extrabold mt-96 mb-96 text-center my-4'>No Reviews were added!!!</h1> : <h1 className='text-3xl font-extrabold  text-center my-4'>Here Is Your Reviews!!!</h1>
            }
            {
                myReviews?.map(myReview => <MySingleReview key={myReview._id} handleDelete={handleDelete} myReview={myReview}></MySingleReview>)
            }
        </div>
    );
};

export default MyReviews;