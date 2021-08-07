import { signOut, useSession } from "next-auth/client"
import {
    UserGroupIcon,
    ChevronDownIcon,
    ShoppingCartIcon,
    ShoppingBagIcon,
    NewspaperIcon,
    FlagIcon,
    BookmarkIcon
} from "@heroicons/react/outline"
import {
    CalendarIcon,
    ClockIcon,
    DesktopComputerIcon,
    UsersIcon,
} from '@heroicons/react/solid'
import SidebarRow from "./SidebarRow"
import { useStateValue } from "../StateProvider"


function Sidebar() {

    const [{ user }] = useStateValue()


    return (
        <div className='p-2 mt-2 max-w-[600px] xl:min-w-[300px]'>
            <SidebarRow src={user.photoURL} title={user.displayName} />
            <SidebarRow Icon={UsersIcon} title="Friends" />
            <SidebarRow Icon={NewspaperIcon} title="News" />
            <SidebarRow Icon={FlagIcon} title="Pages" />
            <SidebarRow Icon={UserGroupIcon} title="Groups" />
            <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
            <SidebarRow Icon={DesktopComputerIcon} title="Watch" />
            <SidebarRow Icon={CalendarIcon} title="Events" />
            <SidebarRow Icon={ClockIcon} title="Memories" />
            <SidebarRow Icon={BookmarkIcon} title="Saved" />
            <SidebarRow Icon={ChevronDownIcon} title="See More" />
        </div>
    )
}

export default Sidebar
