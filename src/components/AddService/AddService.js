import React from 'react';

const AddService = () => {
    const handleAddService = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const id = form.id.value;
        const photo = form.photo.value;
        const title = form.title.value;
        const description = form.description.value;
        const price = form.price.value;
        console.log(name, id, photo, title, description, price)

    }
    return (
        <form onSubmit={handleAddService}>

            <div className="hero-content flex-col lg:flex-row-reverse w-full mx-auto">
                <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100 p-28">
                    <h1 className="text-3xl font-bold text-center">ADD A SERVICE</h1>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Enter Service Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service Id</span>
                            </label>
                            <input type="text" name='id' placeholder="Enter Service Id" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="Enter Your Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service Title</span>
                            </label>
                            <input type="text" name='title' placeholder="Enter Service Title" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" name='description' placeholder="Enter Service Description" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service Price</span>
                            </label>
                            <input type="text" name='price' placeholder="Enter Service Price" className="input input-bordered" required />

                        </div>
                        <div className='text-red-400'>
                            {/* <p>{error}</p> */}
                        </div>
                        <div className="form-control mt-6">

                            <button type='submit' className="btn btn-primary">ADD SERVICE</button>

                        </div>


                    </div>
                </div>
            </div>
        </form>
    );
};

export default AddService;