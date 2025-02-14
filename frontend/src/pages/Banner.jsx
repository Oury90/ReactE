import React from 'react'
import { Link } from 'react-router-dom'
import banner from "../../public/banner.png"
import Shear from './Shear'

const Banner = () => {
    return (
        <>
            <div className='flex justify-between items-center gap-10 mt-7'>
                {/* left banner */}
                <div className='w-2/4'>
                    <h1 className='text-3xl'>What is Lorem Ipsum?</h1>
                    <p className='text-sm my-4'>Lorem Ipsum is simply dummy text of the printing and 
                    typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown printer 
                    took a galley of type and scrambled it to make a type specimen book.</p>
                    <Link className='bg-orange-500 rounded hover:bg-orange-700 text-white px-4 py-1'>Infos</Link>
                </div>
                {/* right banner */}
                <div className='w-2/4'>
                    <img src={banner} alt=''/>
                </div>
            </div>
            <Shear/>
        </>
    )
}

export default Banner;
