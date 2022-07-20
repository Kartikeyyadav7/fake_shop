import React from 'react'
import { Star } from 'react-feather'
import { useNavigate } from 'react-router-dom'

function ProductCard({ id, title, description, category, price, image, rating }) {
    const navigate = useNavigate()

    return (
        <div onClick={() => {
            navigate(`/product/${id}`)
        }} className='cursor-pointer' >
            <div className="py-10">
                <div className="rounded overflow-hidden shadow-lg md:w-96 w-72 h-full grid place-items-center">
                    <img src={image} alt={title} className='h-48 w-48 object-scale-down  ' />
                    <div className='px-6 py-6'>
                        <div className="font-medium text-xl mb-2 text-center">{title}</div>
                        <div className='flex items-center justify-center gap-2'>
                            <div className='flex rounded-lg items-center justify-center w-16 bg-red-400 text-white gap-1 '>
                                {rating.rate}
                                <div className='w-4 h-4'>
                                    <Star className='w-4 h-4' />
                                </div>
                            </div>
                            <div className='text-gray-300'>
                                ({rating.count})
                            </div>
                        </div>
                        <div className='text-xl text-black mt-4 font-bold'>
                            ${price}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard