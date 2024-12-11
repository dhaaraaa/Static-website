import React from 'react'
import team from '../images/team.png'
import { FaRegSmile } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { MdAccessTime } from "react-icons/md";
import { GiMedal } from "react-icons/gi";

const contents = [
    "We are consummate custom software Development company delivering splendid business IT Solutions and related services to customers across the globe. Our development services are led by our dedicated and passionate team to provide best industry practices combined with technology expertise and business domain knowledge to drive digital transformation.",

    "Our proficiency in understanding business challenges and professional competence allows us to create a better experience for our customers. Our efforts focus on concept, design, development and re-engineering of web businesses. We are working closely with software majors on new applications."
]

const productcontent = [
    {
        png: <FaRegSmile size={35} />,
        num: 25,
        subtitle: 'Happy Clients A satisfied customer is the best bussiness goal.'
    },
    {
        png: <GrProjects size={35} />,
        num: 135,
        subtitle: 'Projects we build projects with satisfied customers'
    },
    {
        png: <MdAccessTime size={35} />,
        num: 12,
        subtitle: 'Working Technologies We help enterprises accelerate adoption of new technologies, produce innovation.'
    },
    {
        png: <GiMedal size={35} />,
        num: 25,
        subtitle: 'Developers Our skilled technicians and engineers to implement the new technologies.'
    },
]
const About = () => {
    return (
        <div>
            <div className='mt-20  '>
                <div className='w-full text-center   '>
                    <h1 className='text-3xl uppercase font-medium flex gap-2 justify-center items-center'>
                        <div className='bg-blue-500 w-10 h-[3px]'></div>
                        Aboutus
                        <div className='bg-blue-500 w-10 h-[3px]'></div>
                    </h1>

                </div>
                <div className='  w-full justify-center px-5 gap-7 mt-10 flex flex-col md:px-32'>
                    {
                        contents.map((items, index) => (
                            <div key={index} className='w-full'>
                                <p className='text-gray-500'>{items}</p>
                            </div>
                        ))
                    }
                </div>
                <div className='w-full flex flex-col  items-center  gap-6 mt-10 px-10 md:px-32 md:flex-row'>
                    <div className='w-full flex justify-center  p-4 md:p-10 md:w-4/12  '>
                        <img src={team} alt="" className='w-7/12 object-cover md:w-full' />
                    </div>
                    <div className='grid grid-cols-1 gap-5   md:grid-cols-2 w-full md:w-8/12'>
                        {
                            productcontent.map((items, index) => (
                                <div key={index} className='flex justify-start  gap-3 px-2'>
                                    <p className='text-blue-500 mt-2'>{items.png}</p>
                                    <div>
                                        <p className='text-3xl font-bold mt-2'>{items.num}</p>
                                        <p className=' text-gray-500 mt-2'>{items.subtitle}</p>

                                    </div>


                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
