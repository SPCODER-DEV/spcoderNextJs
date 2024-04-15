/* eslint-disable @next/next/no-img-element */
import React from 'react'

import Links from './Links'

export default function Navbare() {
  return (
    

<nav className="bg-white border-gray-200 dark:bg-gray-900">
    
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    
    <div>
    
        <div><p className='text-2xl font-bold cursor-pointer'>Logo</p></div>
    </div>
   
    <Links/>

    </div>
 
</nav>

  )
}
