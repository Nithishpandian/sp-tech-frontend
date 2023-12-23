import React from 'react'

export const ProductsHome = ({ image, name }) => {
  return (
    <div className='flex items-center border border-[#d3d3d3] bg-[#f1f1f1] rounded-lg hover:shadow-lg duration-300 cursor-pointer'>
        <img className=' w-24 md:w-32 xl:w-36 h-20 md:h-24 object-cover' src={image} alt="" />
        <p className=' font-semibold text-xl text-stone-600 font-dm-sans py-1.5 px-2 xl:px-6'>{name}</p>
    </div>
  )
}
