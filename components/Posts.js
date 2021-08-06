import { useCollection } from 'react-firebase-hooks/firestore';
import Post from "./Post"
import { db } from "../firebase"

// try async, then if that doesn't work try traversing it differently

function Posts({ posts }) {
    const [realtimePosts] = useCollection(
        db.collection("posts").orderBy('timestamp', 'desc')
    )
    console.log(realtimePosts)

    return (
        <div>
            {/* the ?. is called "optional chaining", basically what it does is it returns undefined if realtimePosts doesn't exist when it's called */}
            {realtimePosts ?
                realtimePosts?.docs.map((post) => {
                    return <Post
                        key={post.id}
                        name={post.data().name}
                        message={post.data().message}
                        // email={post.data().email}
                        timestamp={post.data().timestamp}
                        image={post.data().image}
                        postImage={post.data().postImage}
                    // image={post._delegate._document.data.value.mapValue.fields.image.stringValue}
                    />

                }) : (
                    posts.map((post) => (
                        <Post
                            key={post.id}
                            name={post.name}
                            message={post.message}
                            // email={post.data().email}
                            timestamp={post.timestamp}
                            image={post.image}
                            postImage={post.postImage}
                        />
                    ))
                )}
        </div>
    )
}

export default Posts

// You npm installed react-firebase-hooks, which lets you use the information from your DB in a much simpler way than normal