import Image from 'next/image'
import icon from "../public/facebookIcon.png"
import {
    SearchIcon,
    HomeIcon,
    FlagIcon,
    PlayIcon,
    ShoppingCartIcon,
    UserGroupIcon

} from "@heroicons/react/outline"
import HeaderIcon from './HeaderIcon'


function Header() {
    return (
        <div className="flex items-center sticky top-0 z-50 bg-white p-2 lg:px-5 shadow-md ">

            {/* Header left */}
            <div className='flex items-center'>
                <Image src={icon} alt="Facebook icon" width={40} height={40} layout="fixed" />

                <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                    <SearchIcon className="h-6 w-6 text-gray-600" />
                    <input className='flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink' type="text" placeholder="Search Facebook"></input>
                </div>
            </div>



            {/* Header center */}
            <div className="flex justify-center flex-grow">
                <div className="flex space-x-6 md:space-x-2">
                    <HeaderIcon Icon={HomeIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />
                    <HeaderIcon Icon={FlagIcon} />
                </div>
            </div>

            {/* Header right */}

        </div>
    )
}

export default Header


