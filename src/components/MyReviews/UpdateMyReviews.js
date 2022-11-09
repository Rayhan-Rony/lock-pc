import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Navigate, useLocation, useParams } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import UseTitle from '../../layout/hooks/UseTitle';

const UpdateMyReviews = () => {
    const { id } = useParams()
    console.log(id)
    // const location = useLocation()
    const { user } = useContext(AuthContext)
    UseTitle('Update My Reviews')
    // console.log(user)
    const handleReviewUpdate = (e) => {
        e.preventDefault()
        const form = e.target;
        const message = form.message.value;
        // console.log(message)
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ message })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    form.reset()
                    toast.success('updated successfully')
                }
            })



    }
    return (
        <div className='mt-4'>
            <h1 className='text-center font-bold text-3xl mb-4'>Update Your Review</h1>
            <form onSubmit={handleReviewUpdate}>
                <input type="text" name='name' readOnly defaultValue={user?.displayName} className="input w-1/2 mb-3 input-bordered" />
                <input type="email" name='email' readOnly defaultValue={user?.email} className="input w-1/2 mb-3  input-bordered" /><br />
                <textarea name='message' className="textarea textarea-bordered w-full" placeholder="Update Your Review Here" required></textarea>
                <div className='text-center'>
                    <button className="btn btn-primary " type='submit'>Update Review</button>
                </div>
            </form>

        </div>
    );
};

export default UpdateMyReviews;