import React from 'react'
import {assets} from "../assets/admin_assets/assets.js"

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
      <img src={assets.iconic_logo} alt="" className='w-[max(10%,80px)]'/>
      <button onClick={()=>setToken("")} className='bg-[#CC2B52] text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar
