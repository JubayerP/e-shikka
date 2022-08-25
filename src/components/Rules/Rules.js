import React from 'react';

const Rules = () => {
    return (
        <div className='my-28 grid lg:grid-cols-4 sm:grid-cols-1 w-[90vw] mx-auto'>
            <div className='relative bottom-[-3rem] mb-28'>
                <button className='btn bg-[#F38E71] border-0 hover:bg-[#F38E71] text-2xl absolute left-[43%] bottom-[95%]'>01</button>
                <h2 className='text-xl font-semibold my-6 text-center'>Pick a Course</h2>
                <p className='text-center'>Start a Show Academy Course of Your Choice For Free</p>
            </div>
            <div className='relative mb-5'>
                <button className='btn bg-[#F0B867] border-0 hover:bg-[#F0B867] text-2xl absolute left-[43%] bottom-[95%]'>02</button>
                <h2 className='text-xl font-semibold my-6 text-center'>Pick a Course</h2>
                <p className='text-center'>Start a Show Academy Course of Your Choice For Free</p>
            </div>
            <div className='relative bottom-[-3rem] mb-28'>
                <button className='btn bg-[#D379ED] border-0 hover:bg-[#D379ED] text-2xl absolute left-[43%] bottom-[95%]'>03</button>
                <h2 className='text-xl font-semibold my-6 text-center'>Pick a Course</h2>
                <p className='text-center'>Start a Show Academy Course of Your Choice For Free</p>
            </div>
            <div className='relative'>
                <button className='btn bg-[#3DE196] border-0 hover:bg-[#3DE196] text-2xl absolute left-[43%] bottom-[95%]'>04</button>
                <h2 className='text-xl font-semibold my-6 text-center'>Pick a Course</h2>
                <p className='text-center'>Start a Show Academy Course of Your Choice For Free</p>
            </div>
        </div>
    );
};

export default Rules;