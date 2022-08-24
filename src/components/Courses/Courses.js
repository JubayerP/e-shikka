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
            <div className='flex justify-around items-center'>
                <div>
                    <p className='text-[#F9835C] font-semibold'>Popular Courses</p>
                    <h1 className="text-3xl font-bold tracking-wider">Trusted By Million</h1>
                </div>
                <div>
                    <button className='btn bg-[#32D78B] border-0 hover:bg-[#32D78B]'>View All Course</button>
                </div>
            </div>

            {/* Cards */}
            <div className='grid grid-cols-3 gap-7'>
                {
                    courses.map(course => <Course course={ course} key={course.id} />)
                }
            </div>
        </section>
    );
};

export default Courses;