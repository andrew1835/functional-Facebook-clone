import Stories from './Stories'
import InputBox from './InputBox'
import Posts from "./Posts"

function Feed({ posts }) {
    return (
        // You npm installed the tailwind plugin for scrollbar-hide, and you also imported it in tailwind.config.js. 
        <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:pr-24 xl:mr-0 overflow-y-auto scrollbar-hide">
            <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
                {/* Stories */}
                <Stories />
                {/* Input box */}
                <InputBox />
                {/* Posts */}
                <Posts posts={posts} />
            </div>
        </div>
    )
}

export default Feed
