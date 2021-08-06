import AndrewSrc from "../public/AndrewPic.png"
import AndrewProfile from "../public/AndrewProfile.jpeg"
import { SearchIcon } from "@heroicons/react/outline"
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid"


const contacts = [
    { src: AndrewProfile, name: "Andrew Anthony" },
    { src: "https://media.gettyimages.com/photos/ussouth-korean-actor-steven-yeun-poses-on-may-17-2018-during-a-for-picture-id959445632?s=2048x2048", name: "Steven Yeun" },
    { src: "https://media.gettyimages.com/photos/activist-for-female-education-and-the-youngestever-nobel-prize-is-picture-id530773706?s=2048x2048", name: "Malala Yousafzai" },
    { src: "https://media.gettyimages.com/photos/actor-tom-holland-attends-the-press-conference-for-spiderman-far-from-picture-id1159422901?s=2048x2048", name: "Peter Parker" },
    { src: "https://media.gettyimages.com/photos/comedian-conan-obrien-attends-tbs-night-out-at-the-theater-at-the-ace-picture-id534083864?s=2048x2048", name: "Conan O'Brien" },
    { src: "https://media.gettyimages.com/photos/taylor-swift-attends-the-2019-mtv-video-music-awards-at-prudential-picture-id1170386429?s=2048x2048", name: "Taylor Swift" },
]

function Widgets() {
    return (
        // flex column puts the item at the top of the page, since it makes the orientation top to bottom, as opposed to left to right
        <div className='hidden lg:flex flex-col w-60 p-2 mt-5'>
            <div className='flex justify-between items-center text-gray-500 mb-5'>
                <h2 className='text-xl'>Contacts</h2>
                <div className='flex space-x-2'>
                    <VideoCameraIcon className='h-6' />
                    <SearchIcon className='h-6' />
                    <DotsHorizontalIcon className='h-6' />
                </div>
            </div>
        </div>
    )
}

export default Widgets
