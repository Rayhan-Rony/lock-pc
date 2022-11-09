import { Link } from "react-router-dom";


const MySingleReview = ({ myReview }) => {
    // const []
    console.log(myReview)
    const { _id, message, service_name } = myReview

    const handleDelete = (id) => {
        console.log(id)
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => console.log(data))

    }
    // const handleUpdateReviews = (id) => {
    //     console.log(id)


    // }
    return (
        <div className="overflow-x-auto w-full  mt-5">

            <table className="lg:table w-full">

                <thead>
                    <tr>

                        <th>Service Name</th>
                        <th>Review</th>

                    </tr>
                </thead>
                <tbody>

                    <tr>

                        <td>
                            <div>

                                <div className=''>
                                    <div className="font-bold">{service_name}</div>

                                </div>
                            </div>
                        </td>

                        <td>{message}</td>
                        {/* <th>
                            <button className="btn btn-ghost btn-xs">details</button>
                        </th> */}
                    </tr>





                </tbody>
                {/* 
        <tfoot>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
            </tr>
        </tfoot> */}

            </table>
            <div className='text-end'>
                <Link to={`/updatereviews/${_id}`}><button className="btn btn-primary btn-xs mr-4">Edit Review</button></Link>
                <button onClick={() => handleDelete(_id)} className="btn btn-primary btn-xs">Delete Review</button>
            </div>
        </div>
    );
};

export default MySingleReview;