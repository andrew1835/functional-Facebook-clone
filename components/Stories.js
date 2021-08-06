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
        name: "Malala Yousafzai",
        src: "https://media.gettyimages.com/photos/malala-yousafzai-speaks-to-thousands-of-guests-at-the-melbourne-and-picture-id1080796472?s=2048x2048",
        profile: "https://media.gettyimages.com/photos/activist-for-female-education-and-the-youngestever-nobel-prize-is-picture-id530773706?s=2048x2048"
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
