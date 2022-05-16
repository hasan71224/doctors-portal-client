import React from 'react';
import appointment from '../../../assets/images/appointment.png'

const Contact = () => {
    return (
        <section style={{background: `url(${appointment})`}}>
            <div className='card-body items-center text-center mt-20'>
                <h2 className='font-bold primary text-primary'>Contact Us</h2>
                <p className='text-2xl text-white'>Stay connected with us</p>
            </div>

            <div className="card flex-shrink-0 w-full items-center ">
                <div className="card-body">
                    <div className="form-control">
                        <input type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder="password" className="input input-bordered" />
                    </div>
                    <textarea className="textarea textarea-bordered" placeholder="Bio"></textarea>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Contact;