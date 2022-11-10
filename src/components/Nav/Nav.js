import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Nav = () => {
    const { user, logOut } = useContext(AuthContext)

    return (
        <div className="navbar  mb-10 sticky top-0 z-50 rounded-sm bg-slate-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/services'>Services</Link></li>
                        <li><Link to='/blogs'>Blogs</Link></li>
                        {
                            user ? <>
                                <li><Link to='/myreviews' >My Reviews</Link></li>
                                <li><Link to='/addservice' >Add Service</Link></li>
                                <li><Link onClick={logOut}>Log Out</Link></li>
                            </>
                                : <li><Link to='/login'>Log In</Link></li>
                        }


                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-2xl font-extrabold">Lock Pc</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/services'>Services</Link></li>
                    <li><Link to='/blogs'>Blogs</Link></li>
                    {
                        user ?
                            <>
                                <li><Link to='/myreviews' >My Reviews</Link></li>
                                <li><Link to='/addservice' >Add Service</Link></li>
                                <li><Link onClick={logOut}>Log Out</Link></li>
                            </>
                            : <li><Link to='/login'>Log In</Link></li>
                    }

                </ul>
            </div>

        </div>
    );
};

export default Nav;