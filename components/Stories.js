import StoryCard from "./StoryCard"
import { useSession } from "next-auth/client"
import AndrewSrc from "../public/AndrewPic.png"
import AndrewProfile from "../public/AndrewProfile.jpeg"

const stories = [
    {
        name: "Andrew Anthony",
        src: AndrewSrc,
        profile: AndrewProfile
    },
    {
        name: "Steven Yeun",
        src: "https://media.gettyimages.com/photos/steven-yeun-attends-the-sundance-institute-at-sundown-summer-benefit-picture-id974994518?s=2048x2048",
        profile: "https://media.gettyimages.com/photos/ussouth-korean-actor-steven-yeun-poses-on-may-17-2018-during-a-for-picture-id959445632?s=2048x2048"
    },
    {
        name: "Nikola Tesla",
        src: "https://media.gettyimages.com/photos/entwicklung-der-elektrizitt-drahtlose-kraftbertragung-eine-erfindung-picture-id542361847?k=6&m=542361847&s=612x612&w=0&h=I4w0jJnZ9z982x9X2JYmgUPppg79_JT9iGQa7XjBQY0=",
        profile: "https://media.gettyimages.com/photos/serbianamerican-inventor-and-engineer-nikola-tesla-aged-34-circa-1890-picture-id666932578?s=2048x2048"
    },
    {
        name: "Peter Parker",
        src: "https://media.gettyimages.com/photos/spiderman-during-filming-of-spiderman-2-on-location-in-lower-at-in-picture-id112383659?s=2048x2048",
        profile: "https://media.gettyimages.com/photos/actor-tom-holland-attends-the-press-conference-for-spiderman-far-from-picture-id1159422901?s=2048x2048"
    },
    {
        name: "Conan O'Brien",
        src: "https://media.gettyimages.com/photos/actorwriter-larry-david-and-tv-personality-conan-obrien-attend-the-picture-id512952416?s=2048x2048",
        profile: "https://media.gettyimages.com/photos/comedian-conan-obrien-attends-tbs-night-out-at-the-theater-at-the-ace-picture-id534083864?s=2048x2048"
    },
]

function Stories() {

    return (
        <div className="flex justify-center space-x-3 mx-auto">
            {stories.map(story => {
                return <StoryCard key={story.src} name={story.name} src={story.src} profile={story.profile} />
            })}
        </div>
    )
}

export default Stories
