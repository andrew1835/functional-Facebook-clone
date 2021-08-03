import React from 'react'

function HeaderIcon({ Icon, active }) {
    return (
        // on border-b-2, b stands for bottom border and 2 is the width in pixels of that border. 
        <div className='flex items-center cursor-pointer sm:h-14 md:px-10 rounded-xl  md:hover:bg-gray-100 active:border-b-2 active:border-blue-500 group'>

            <Icon className={`h-5 w-5 text-center sm:h-7 mx-auto group-hover:text-blue-500  ${active ? 'text-blue-500' : "text-gray-500"}`} />

        </div>
    )
}

export default HeaderIcon
