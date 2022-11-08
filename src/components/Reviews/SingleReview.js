import React from 'react';

const SingleReview = ({ review }) => {
    console.log(review)
    const { photo, name, message } = review
    return (

        <div className="overflow-x-auto w-full  mt-5">

            <table className="lg:table w-full">

                <thead>
                    <tr>

                        <th>Name</th>
                        <th>Review</th>

                    </tr>
                </thead>
                <tbody>

                    <tr>

                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={photo} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div className=''>
                                    <div className="font-bold">{name}</div>

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
        </div>
    );
};

export default SingleReview;