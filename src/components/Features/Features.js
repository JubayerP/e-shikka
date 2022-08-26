import React from 'react';
import Reading from '../../assets/images/reading.svg'

const Features = () => {
    return (
        <div className='my-20'>
            <div className='lg:ml-28 ml-10 mb-10'>
                <p className="text-orange-500 text-center lg:text-start">Great Features</p>
                <h1 className="lg:text-4xl text-3xl font-bold lg:text-start text-center">Why Choose e-Shikka</h1>
            </div>
            <div className='flex items-center justify-evenly lg:flex-row flex-col'>
                <div className='lg:ml-0 ml-8'>
                    <div className='mb-8'>
                        <h3 className="text-xl font-bold">Flexible Online Classes</h3>
                        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quae.</p>
                    </div>
                    <div className='mb-8'>
                        <h3 className="text-xl font-bold">Globally Recognised Course</h3>
                        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quae.</p>
                    </div>
                    <div className='mb-8'>
                        <h3 className="text-xl font-bold">Educator Support</h3>
                        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quae.</p>
                    </div>
                    <div className='mb-0'>
                        <h3 className="text-xl font-bold">Pause Course</h3>
                        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quae.</p>
                    </div>
                </div>

                <div className='lg:mt-0 mt-14'>
                    <img className='lg:w-[70%] w-[80%] mx-auto' src={Reading} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Features;