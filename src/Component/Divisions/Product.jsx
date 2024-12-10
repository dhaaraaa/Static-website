import React from 'react'
import product1 from '../images/product1.jpg'
import product2 from '../images/product2.jpg'
import product3 from '../images/product3.jpg'
import product4 from '../images/product4.jpg'
const Product = () => {

    const products=[
        {
        image:product1,
        title:"Data Analyzer",
        comments:"The systematic application of statistical and logical techniques to describe the data scope, modularize the data structure illustrate via images, tables, and graphs."
        },
        {
        image:product2,
        title:"Data Analyzer",
        comments:"The systematic application of statistical and logical techniques to describe the data scope, modularize the data structure illustrate via images, tables, and graphs."
        },
        {
        image:product3,
        title:"Data Analyzer",
        comments:"The systematic application of statistical and logical techniques to describe the data scope, modularize the data structure illustrate via images, tables, and graphs."
        },
        {
        image:product4,
        title:"Data Analyzer",
        comments:"The systematic application of statistical and logical techniques to describe the data scope, modularize the data structure illustrate via images, tables, and graphs."
        }
]
  return (
    <div className='mt-20'>
      <div className='w-full text-center   '>
                <h1 className='text-3xl uppercase font-medium flex gap-2 justify-center items-center'>
                    <div className='bg-blue-500 w-10 h-[3px]'></div>
                    Services
                    <div className='bg-blue-500 w-10 h-[3px]'></div>
                </h1>

                <p className='text-xl text-gray-500 mt-2'>Our software development services</p>
            </div>
            <div className='grid grid-cols-1 w-full px-5 justify-center gap-8 mt-10 md:grid-cols-2 md:px-32'>
                {
                    products.map((items,index)=>(
                        <div className='w-full h-[300px]  relative group  md:h-[360px]' key={index} >
                            <img src={items.image} alt="" className='w-full h-full object-cover rounded-lg' />
                            <div className='absolute bottom-4 left-3 right-3 bg-[#ffffffbd] rounded-lg p-4
                            group-hover:bg-blue-400 group-hover:text-white '>
                                <h3 className='font-medium text-xl text-center mt-3'>{items.title}</h3>
                                <p className='text-gray-700 mt-2 group-hover:text-white'>{items.comments}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
    </div>
  )
}

export default Product
