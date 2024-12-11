import React from 'react'
import { IoCloseSharp } from "react-icons/io5";
const SideNav = ({status,menu}) => {

    const items = ['Home', 'Services', 'Products', 'Aboutus']

    return (
        <div className={  `bg-white transition-all z-50 ease-in-out duration-1000 ${status ? 'left-0 w-8/12':'-left-[40%]'}
          flex justify-start h-screen top-0 fixed  md:hidden `}>
            <p className='absolute right-4 top-3'>
            <IoCloseSharp size={25} onClick={menu}/>
            </p>
            <ul className='flex flex-col gap-4 p-10'>
                {
                    items.map((items) => (
                        <li className='hover:text-blue-600 cursor-pointer '>{items}</li>
                    ))
                }
            </ul>
        </div>

    )
}

export default SideNav
