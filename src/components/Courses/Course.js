import React from 'react';

const Course = ({ course }) => {
    console.log(course);
    return (
        <div className=''>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{ course.name}</h2>
                    <p>{ course.gradguates}</p>
                    <div class="card-actions">
                        <button class="btn btn-primary">Enroll Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;