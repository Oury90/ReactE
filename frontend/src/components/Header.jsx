import React, { useState } from 'react'
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { GiShoppingCart } from "react-icons/gi";
import profile from "../../public/avatar.png"


const navigation  = [
    {name: "Home", href: "/"},
    {name: "About", href: "/about"},
    {name: "Contact", href: "/contact"},
    {name: "Sing Out", href: "/singout"}
]
const Header = () => {

    const currentUser = true;
    const [nav, setNav] = useState([]);
    return (
        <div className='flex justify-between '>
            {/* left navigation */}
            <div className='flex items-center justify-center gap-2'>
                <Link>
                    <HiMiniBars3CenterLeft />
                </Link>
                <div className=' flex items-center relative'>
                    <IoIosSearch className='absolute mt-1'/>
                    <input type='text' placeholder='Search here' className='bg-gray-300 focus:outline-none px-4 py-1 rounded'/>
                </div>

            </div>

            {/* right navigation */}
            <div className='flex items-center justify-center gap-2 relative'>
                <button className="cursor-pointer" onClick={() => setNav(!nav)}>
                    {
                        currentUser ? <><img src={profile} alt='' className='border-sky-500 border-2 rounded-full'/>
                        {
                            nav &&(
                                <div className='absolute'>
                                    <ul>
                                        {
                                            navigation.map((item)=> (
                                                <li key={item.name} className='text-sm text-gray-700 hover:text-gray-950'>
                                                    <Link to={item.href}>{item.name}</Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            )
                        }
                        </> : <CiUser />
                    }
                    
                </button>
                <CiHeart />
                <Link className='flex items-center gap-1 bg-orange-500 rounded hover:bg-orange-700 text-white px-2'>
                    <GiShoppingCart />
                    <span>Shop</span>
                </Link>
            </div>
        </div>
    )
}

export default Header
