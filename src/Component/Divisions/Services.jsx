import React from 'react'
import { GiWorld } from "react-icons/gi";
const Services = () => {
    const lists = [
        {
            icons: <GiWorld size={25} />,
            title: 'Custom Application Development Services',
            paragraph:
                'Custom Application Development Services We rely on our technological expertise and specialized industry experience to develop any type of web, mobile, desktop, and hybrid app per your business requirements.'
        },
        {
            icons: <GiWorld size={25} />,
            title: 'Custom Application Development Services',
            paragraph:
                'Custom Application Development Services We rely on our technological expertise and specialized industry experience to develop any type of web, mobile, desktop, and hybrid app per your business requirements.'
        },
        {
            icons: <GiWorld size={25} />,
            title: 'Custom Application Development Services',
            paragraph:
                'Custom Application Development Services We rely on our technological expertise and specialized industry experience to develop any type of web, mobile, desktop, and hybrid app per your business requirements.'
        },
        {
            icons: <GiWorld size={25} />,
            title: 'Custom Application Development Services',
            paragraph:
                'Custom Application Development Services We rely on our technological expertise and specialized industry experience to develop any type of web, mobile, desktop, and hybrid app per your business requirements.'
        },
        {
            icons: <GiWorld size={25} />,
            title: 'Custom Application Development Services',
            paragraph:
                'Custom Application Development Services We rely on our technological expertise and specialized industry experience to develop any type of web, mobile, desktop, and hybrid app per your business requirements.'
        },
        {
            icons: <GiWorld size={25} />,
            title: 'Custom Application Development Services',
            paragraph:
                'Custom Application Development Services We rely on our technological expertise and specialized industry experience to develop any type of web, mobile, desktop, and hybrid app per your business requirements.'
        },
        {
            icons: <GiWorld size={25} />,
            title: 'Custom Application Development Services',
            paragraph:
                'Custom Application Development Services We rely on our technological expertise and specialized industry experience to develop any type of web, mobile, desktop, and hybrid app per your business requirements.'
        },
        {
            icons: <GiWorld size={25} />,
            title: 'Custom Application Development Services',
            paragraph:
                'Custom Application Development Services We rely on our technological expertise and specialized industry experience to develop any type of web, mobile, desktop, and hybrid app per your business requirements.'
        }
    ]


    return (
        <div className='w-full bg-white mt-10 px-5 md:px-32 ' >
            <div className='w-full text-center '>
                <h1 className='text-3xl uppercase font-medium flex gap-2 justify-center items-center'>
                    <div className='bg-blue-500 w-10 h-[3px]'></div>
                    Services
                    <div className='bg-blue-500 w-10 h-[3px]'></div>
                </h1>

                <p className='text-xl text-gray-500 mt-2'>Our software development services</p>
            </div>
            <div className=' w-full grid grid-cols-1  items-center gap-3 md:gap-5  md:grid-cols-4'>
                {
                    lists.map((lists, index) => (
                        <div className='bg-white p-10 rounded-lg shadow-lg mt-9  z-10' key={index}>
                            <p className='bg-blue-400 text-white rounded-[50%] inline-block p-3 z-20'>{lists.icons}</p>
                            <h1 className='text-lg font-medium text-black mt-1 '>{lists.title}</h1>
                            <p className='mt-1 text-gray-500 text-base'>{lists.paragraph}</p>

                        </div>

                    ))
                }
            </div>
        </div>
    )
}

export default Services
