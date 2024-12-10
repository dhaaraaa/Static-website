import React from 'react'
import resource from '../images/resource.png'
const Hero = () => {
    return (
        <div className='w-full flex justify-center p-4 gap-5 mt-10  bg-white  flex-col-reverse md:flex-row md:items-center' >
            <div className='w-full md:w-6/12  md:px-20'>
                <h1 className='text-3xl  font-semibold  md:text-5xl '>
                    Grow your business with VEBWOX
                </h1>
                <h4 className='text-gray-500 text-xl mt-4 md:text-2xl'>
                    We are team of talented developers making Excellent Solutions to business
                </h4>
                <button className='px-6 py-2 border border-blue-500 rounded-2xl text-blue-500 mt-7'>Get Started</button>
            </div>
            <div className='w-full md:w-6/12 flex justify-center '>
                <img src={resource} className='w-64 h-64 md:w-96 md:h-96'></img>
            </div>
        </div>
    )
}

export default Hero
