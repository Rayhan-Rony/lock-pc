import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const MyReviews = () => {
    const { user } = useContext(AuthContext)
    const [myReviews, setMyReviews] = useState([])
    // console.log(user)
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [])
    console.log(myReviews)
    return (
        <div>
            <h1>This is my reviews</h1>
        </div>
    );
};

export default MyReviews;