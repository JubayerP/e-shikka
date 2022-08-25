import React, { useEffect, useState } from 'react';
import Course from './Course';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    console.log(courses);
    useEffect(()=>{
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    },[])
    return (
        <section className='my-20'>
            <div className='flex justify-around items-center lg:flex-row sm:flex-col'>
                <div className=''>
                    <p className='text-[#F9835C] lg:font-semibold lg:text-lg sm:text-sm'>Popular Courses</p>
                    <h1 className="lg:text-3xl sm:text-xl font-bold tracking-wider">Trusted By Million</h1>
                </div>
                <div>
                    <button className='btn bg-[#32D78B] border-0 hover:bg-[#32D78B]'>View All Course</button>
                </div>
            </div>

            {/* Cards */}
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-7 mx-[10%] mt-20'>
                {
                    courses.map(course => <Course course={ course} key={course.id} />)
                }
            </div>
        </section>
    );
};

export default Courses;