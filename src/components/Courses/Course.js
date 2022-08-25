import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const Course = ({ course }) => {
    console.log(course);
    return (
        <div className=''>
            <div class="card w-72 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">{course.name}</h2>
                    <div className='flex items-center'>
                        <p className='mr-3'>{course.gradguates}</p>
                        <div className='flex mr-16'>
                            <AiFillStar color='orange' />
                            <AiFillStar color='orange' />
                            <AiFillStar color='orange' />
                            <AiFillStar color='orange' />
                            <AiFillStar color='orange' />
                        </div>
                    </div>
                    <div class="card-actions">
                        <button class="btn bg-[#FDEFE9] border-0 hover:bg-[#dbcbc4] text-[#F9835C]">Enroll Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;