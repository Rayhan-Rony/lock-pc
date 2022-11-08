import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="hero-content flex-col lg:flex-row-reverse lg:w-1/2 md:w-full mx-auto">
                <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100 p-28">
                    <h1 className="text-3xl font-bold text-center">Login Now</h1>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Password" className="input input-bordered" />
                            <div className='text-red-400'>
                                {/* <p>{error}</p> */}
                            </div>
                            <label className="label">
                                <p >If you haven't any account please <Link className="label-text-alt link link-hover text-blue-400" to='/register'>Register</Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Log in</button>
                        </div>
                        {/* <div className="form-control mt-6">
                            <button onClick={handleSignInWithGoogle} className="btn btn-primary">Log With Google</button>
                        </div>
                        <div className="form-control mt-6">
                            <button onClick={handleSignInWithGitHub} className="btn btn-primary">Log With GitHub</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Login;