import React, { useContext, useState } from 'react'
import {assets} from '../assets/frontend_assets/assets'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {
    const [visible,setVisible]=useState(false);
    const {setShowSearch,getCartCount,navigate,token,setToken,setcartItems}=useContext(ShopContext);
    const logout=()=>{
        navigate("/login")

        localStorage.removeItem("token")
        setToken("")
        setcartItems([])
    }
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
     <Link to="/"><img src={assets.iconic} alt="" className='w-32'/></Link> 
   <ul className='hidden sm:flex gap-5 text-sm text-[#740938]'>
<NavLink to='/' className='flex flex-col items-center gap-1'>
    <p>Home</p>
    <hr className='w-2/4 border-none h-[1.5px] bg-pink-700 hidden' />
</NavLink>
<NavLink to='/collection' className='flex flex-col items-center gap-1'>
    <p>Collection</p>
    <hr className='w-2/4 border-none h-[1.5px] bg-pink-700 hidden' />
</NavLink>
<NavLink to='/about' className='flex flex-col items-center gap-1'>
    <p>About</p>
    <hr className='w-2/4 border-none h-[1.5px] bg-pink-700 hidden' />
</NavLink>
<NavLink to='/contact' className='flex flex-col items-center gap-1'>
    <p>Contact</p>
    <hr className='w-2/4 border-none h-[1.5px] bg-pink-700 hidden' />
</NavLink>
   </ul>
   <div className='flex items-center gap-6'>
    <img  onClick={()=>setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
    {/* dropdown menu */}

    <div className='group relative'>
        {/* <Link to={'/login'}> */}
            <img onClick={()=>token?null:navigate("/login")} src={assets.profile_icon} className='w-5 cursor-pointer' alt="" />
        {/* </Link> */}
        {
        token && 
         <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
        <div className='flex flex-col gap-2 w-36 px-5 bg-[#faf7f7] text-[#740938] rounded'>
            <p className='cursor-pointer hover:text-[#CC2B52]'>My Profile</p>
            <p className='cursor-pointer hover:text-[#CC2B52]'>Orders</p>
            <p onClick={logout} className='cursor-pointer hover:text-[#CC2B52]'>Logout</p>
        </div>
    </div>
    }
       
    </div>
    <Link to='/cart' className="relative">
        <img src={assets.cart_icon} alt="" className='w-5 min-w-5'/>
        <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-[#740938] text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
    </Link>
    <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
   </div>
   {/* Sidebar Menu for small screen */}
   <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible?'w-full':'w-0'}`}>
    <div className='flex flex-col text-gray-600'>
        <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
            <img src={assets.dropdown_icon} className='h-4 rotate-180' alt="" />
            <p>Back</p>
        </div>
        <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'>Home</NavLink>
        <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/collection'>Collection</NavLink>
        <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/about'>About</NavLink>
        <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/contact'>Contact</NavLink>

    </div>
   </div>
    </div>
  )
}

export default Navbar
