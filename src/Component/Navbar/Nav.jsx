import React, { useState } from 'react'
import { IoIosMenu } from "react-icons/io";
import SideNav from './SideNav';

const Nav = () => {

    const[status,setstatus]=useState(false)
    const menu =()=>{
        setstatus(!status)
        console.log(status)
    }
    const items = ['Home', 'Services', 'Products', 'Aboutus']
    return (
        <>
        <div className='flex justify-between items-center w-full px-5 py-5 bg-white top-0 sticky shadow-md z-50 md:px-10'>
            <h1 className='text-2xl font-bold text-blue-700'>WEBVOX</h1>
            <div className='hidden md:flex  gap-10 '>
                <ul className='flex items-center gap-5  '>
                    {
                        items.map((items) => (
                            <li className='hover:text-blue-600 cursor-pointer'>{items}</li>
                        ))
                    }
                </ul>
                <button className='px-6 py-2  bg-blue-500 rounded-2xl text-white
                 hover:bg-blue-500 transition-all ease-out duration-300'>Get Started</button>

            </div>
            {
                status == false && <p className='block md:hidden'>
                <IoIosMenu size={25}  onClick={menu}/>
                </p>
            }
          

        </div>
        <SideNav status={status} menu={menu}/>
        </>
    )
}

export default Nav
