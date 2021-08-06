import React from 'react'


// because you have the Icon prop capitalized, you have essentially created a component within a component (the Icon component within the HeaderIcon component). Very cool. In the Header.js file when you set Icon equal to something, it becomes equal to it (in that case it becomes one of the icons you set it equal to), but it retains all the styling you did for it here
function HeaderIcon({ Icon, active }) {
    return (
        // on border-b-2, b stands for bottom border and 2 is the width in pixels of that border. 
        <div className='flex items-center cursor-pointer sm:h-14 md:px-10 rounded-xl  md:hover:bg-gray-100 active:border-b-2 active:border-blue-500 group'>

            <Icon className={`h-5 w-5  text-center sm:h-7 mx-auto group-hover:text-blue-500  ${active ? 'text-blue-500 border-b-2 border-blue-500' : "text-gray-500"}`} />

        </div>
    )
}

export default HeaderIcon
