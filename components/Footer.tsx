import React from 'react'

export default function Footer() {
    const date =  Date().split(" ")[3]
  return (
    <div className='w-full  bg-slate-200 m-auto p-4 text-center rounded-t-md'>
        <div className='pt-10 font-medium'>
            <p>@{date} جميع الحقوق محفوظة | ©Logo</p>
        </div>
    </div>
  )
}
