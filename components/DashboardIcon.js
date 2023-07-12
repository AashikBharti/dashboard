'use client'
import React, { useState } from 'react'

function DashboardIcon({icon,title}) {
    const [selected,setSelected] = useState(false);
    const handleClick = ()=>{
        setSelected(true)
    }
    return (
        <div className={`drop-shadow-md flex gap-x-5 mb-5 active:border-blue-500 border-l-2  px-4 text-white cursor-pointer ${selected?`border-blue-500`:``}` } onClick={()=>handleClick()}>
            {icon}
            <div>
                {title}
            </div>
        </div>
    )
}

export default DashboardIcon