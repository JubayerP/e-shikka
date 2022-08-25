import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const Course = ({ course }) => {
    console.log(course);
    return (
        <div className=''>
            <div className="card w-80 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title mb-5">{course.name}</h2>
                    <div className='flex items-center w-[20rem] mb-2'>
                        <p className='mr-3'>{course.gradguates}</p>
                        <div className='flex mr-16'>
                            <AiFillStar color='orange' />
                            <AiFillStar color='orange' />
                            <AiFillStar color='orange' />
                            <AiFillStar color='orange' />
                            <AiFillStar color='orange' />
                        </div>
                    </div>
                    <div className="card-actions">
                        <button className="btn bg-[#FDEFE9] border-0 hover:bg-[#dbcbc4] text-[#F9835C]">Enroll Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;