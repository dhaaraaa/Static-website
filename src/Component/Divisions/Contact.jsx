import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Login from '../Divisions/Login'
const Contact = () => {

    const footericons = [
        <FaTwitter size={20}  />,
        <FaInstagram size={20} />,
        <FaFacebookF size={20} />,
        <FaLinkedinIn size={20} />


    ]
    return (
        <>
            <div className='w-full text-center mt-20 '>
                <h1 className='text-3xl uppercase font-medium flex gap-2 justify-center items-center'>
                    <div className='bg-blue-500 w-10 h-[3px]'></div>
                    contactus
                    <div className='bg-blue-500 w-10 h-[3px]'></div>
                </h1>
            </div>

            <div className='flex flex-col w-full justify-center px-5 items-start mt-4 gap-6
             md:px-32 md:flex-row'>
                <div className=' w-full md:w-4/12 mt-4 '>
                    <h1 className='uppercase text-2xl font-semibold'>vebwox</h1>
                    <p className='text-gray-500 '>Our mission is to enhance business growth of our customers with creative design, development and to deliver market defining high quality solutions that create value and reliable competitive advantage to customers around the globe.</p>
                    <div className='flex gap-4 mt-'>
                        {
                            footericons.map((items, index) => (
                                <p key={index} className='border rounded-[50%] text-blue-500
                             border-blue-500  p-2 hover:bg-blue-500 hover:text-white'>{items}</p>
                            ))
                        }
                    </div>
                </div>

                <div className='w-full md:w-8/12'><Login /></div>
            </div>

        </>
    )
}

export default Contact
