import React from 'react';

const Reviews = () => {
    return (
        <div className="overflow-x-auto w-full  mt-12">
            <h1 className='text-3xl text-center font-bold mb-4'>What Client Says</h1>
            <table className="lg:table w-full">

                <thead>
                    <tr>

                        <th>Name</th>
                        <th>Address</th>
                        <th>Review</th>

                    </tr>
                </thead>
                <tbody>

                    <tr>

                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">Hart Hagerty</div>

                                </div>
                            </div>
                        </td>
                        <td>
                            Zemlak, Daniel and Leannon
                            <br />
                            <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                        </td>
                        <td>Purple</td>
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

export default Reviews;