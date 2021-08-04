import Image from 'next/image'
import icon from "../public/facebookIcon.png"
import {
    SearchIcon,
    FlagIcon,
    PlayIcon,
    ShoppingCartIcon,
    UserGroupIcon,

} from "@heroicons/react/outline"
import {
    ViewGridIcon,
    HomeIcon,
    ChatIcon,
    BellIcon,
    ChevronDownIcon
} from "@heroicons/react/solid"
import HeaderIcon from './HeaderIcon'
import { signOut, useSession } from "next-auth/client"


function Header() {

    const [session] = useSession()

    return (
        <div className="flex items-center sticky top-0 z-50 bg-white p-2 lg:px-5 shadow-md ">

            {/* Header left */}
            <div className='flex items-center'>
                <Image src={icon} alt="Facebook icon" width={40} height={40} layout="fixed" />

                <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                    <SearchIcon className="h-6 w-6 text-gray-600" />
                    <input className='hidden md:inline-flex flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink' type="text" placeholder="Search Facebook"></input>
                </div>
            </div>



            {/* Header center */}

            {/* Below  are two different ways to do the same styling for a group of icons. One way is to create a component (here it's called HeaderIcon) and to customize the component, and then declare them multiple times below. The other way is to import all the unique components at the top, declare them all down below (such as ViewGridIcon, ChatIcon ,etc) and then create a custom style component in globals.css that you use for each icon. Both valid*/}
            <div className="flex justify-center flex-grow">
                <div className="flex space-x-6 md:space-x-2">
                    <HeaderIcon active Icon={HomeIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />
                    <HeaderIcon Icon={FlagIcon} />
                </div>
            </div>



            {/* Header right */}
            <div className='flex items-center sm:space-x-2 justify-end'>

                {/* Profile picture */}
                <Image
                    onClick={signOut}
                    className="rounded-full cursor-pointer"
                    src={session.user.image}
                    width="40"
                    height="40"
                    layout="fixed"
                />


                <p className="font-semibold pr-3 whitespace-nowrap">{session.user.name}</p>
                <ViewGridIcon className='icon' />
                <ChatIcon className='icon' />
                <BellIcon className='icon' />
                <ChevronDownIcon className='icon' />
            </div>

        </div>
    )
}

export default Header

// w 6

