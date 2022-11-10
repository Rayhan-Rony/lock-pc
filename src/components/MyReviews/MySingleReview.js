import { Link } from "react-router-dom";


const MySingleReview = ({ myReview, handleDelete }) => {


    const { _id, message, service_name } = myReview


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

                    </tr>
                </tbody>
            </table>
            <div className='text-end'>
                <Link to={`/updatereviews/${_id}`}><button className="btn btn-primary btn-xs mr-4">Edit Review</button></Link>
                <button onClick={() => handleDelete(_id)} className="btn btn-primary btn-xs">Delete Review</button>
            </div>
        </div>
    );
};

export default MySingleReview;