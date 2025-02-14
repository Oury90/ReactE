import React from 'react'
import { Link } from 'react-router-dom'
import { GiShoppingCart } from "react-icons/gi";
import bannerE from "../../public/banner.png"

const Card = () => {
    return (
        <div className='flex justify-between items-center w-40 gap-1 p-2 border rounded'>
            <div className='w-2/4'>
                <img src={bannerE} alt='' className='object-contain md:object-cover'/>
            </div>
            <div>
                <h2>title</h2>
                <p className='text-xs'>content</p>
                <ul className='text-xs'>
                    <li className='line-through'>Price: $56</li>
                    <li>Price: $32</li>
                </ul>
                <Link className='w-20 flex items-center gap-1 bg-orange-500 text-white px-2 rounded drop-shadow-md hover:bg-amber-700 mt-2'>
                    <GiShoppingCart />
                    <span>Add</span>
                </Link>
            </div>
        </div>
    )
}

export default Card
