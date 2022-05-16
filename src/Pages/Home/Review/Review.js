import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                <div className="card-actions ">
                    <div className="flex items-center mt-5">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={review.img} alt='' />
                        </div>
                        <div className='ml-4'>
                            <h4 className='text-xl'>{review.name} </h4>
                            <p>{review.city}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;