import SingleReview from './SingleReview';

const Reviews = ({ reviews }) => {

    return (
        <div className='mt-5'>
            {
                reviews.length > 0 ? <h1 className='text-3xl text-center font-bold my-10'>What Client Says</h1> : <h1 className='text-3xl text-center font-bold my-10'>No reviews yet for this service</h1>
            }
            {
                reviews?.map(review => <SingleReview key={review._id} review={review}></SingleReview>)
            }
        </div>
    );
};

export default Reviews;