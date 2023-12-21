import React from 'react'

export const ProductsHome = ({ image, name }) => {
  return (
    <div className='flex items-center border border-[#d3d3d3] bg-[#f1f1f1] rounded-lg hover:shadow-lg duration-300 cursor-pointer'>
        <img className=' w-24 h-20 object-cover' src={image} alt="" />
        <p className=' font-semibold text-lg text-stone-600 font-dm-sans py-1.5 px-4'>{name}</p>
    </div>
  )
}
