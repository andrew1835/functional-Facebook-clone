import Image from 'next/image'
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from '@heroicons/react/outline'
import { useStateValue } from "../StateProvider"

function Post({ name, message, postImage, image, timestamp, editText, keyID, deletePost }) {


    const [{ user }] = useStateValue()

    // var editButton = document.getElementById("editButton")
    // console.log(editButton)
    console.log("Post Author: " + { name }.name)
    console.log("User: " + user.displayName)
    var postAuthor = { name }.name
    var loggedInUser = user.displayName
    var isUser = 0




    if ({ name }.name == user.displayName) {
        // console.log("Name: " + { name }.name)
        // console.log(user.displayName)
        // editButton.classList.remove("hidden")
        isUser = 1
        var hiddenEdit = "hover:bg-gray-200 pl-2 pr-2 pt-1 pb-1 text-blue-500 rounded-xl"
        var hiddenDelete = 'hover:bg-gray-200 pl-2 pr-2 pt-1 pb-1 rounded-xl text-red-500'
        // console.log(isUser)

    } else {
        isUser = 2
        var hiddenEdit = "hover:bg-gray-200 pl-2 pr-2 pt-1 pb-1 text-blue-500 rounded-xl hidden"
        var hiddenDelete = 'hover:bg-gray-200 pl-2 pr-2 pt-1 pb-1 rounded-xl text-red-500 hidden'
        // console.log(isUser)
    }
    console.log(isUser)
    // for (let i = 0; i < editButton.length; i++) {
    //     if ({ name }.name == user.displayName) {
    //         console.log("Name: " + { name }.name)
    //         console.log(user.displayName)
    //         editButton[i].classList.remove("hidden")

    //     }

    // }
    // if ({ name }.name == user.displayName) {
    //     var editButton = document.getElementsByClassName("editButton")
    //     editButton.classList.add("inline-block")
    // }

    return (
        <div className='flex flex-col' id={keyID}>
            <div className='bg-white p-5 mt-5 rounded-t-2xl shadow-sm relative'>
                <div className='flex flex-row items-center space-x-2 w-full'>
                    <Image className='rounded-full' src={image} width={40} height={40} />
                    <div>
                        <p className='font-medium'>{name}</p>
                        {timestamp ? (<p className='text-xs text-gray-400'>
                            {new Date(timestamp?.toDate()).toLocaleString()}
                        </p>
                        ) : (
                            <p className='text-gray-400 text-xs'>Loading...</p>
                        )
                        }

                    </div>


                </div>

                {/* goal is to make it so that it works for every post, and then write the code so that the buttons only appear and you can use it if your info matches the info of the user who made the post */}
                <div className='absolute top-3 right-3'>
                    <div className='flex space-x-2 text-sm'>
                        <div>
                            <button className={hiddenEdit} id='editButton' onClick={editText}>Edit</button>
                        </div>
                        <div>
                            <button className={hiddenDelete} onClick={deletePost}>Delete</button>
                        </div>
                    </div>
                </div>
                <p className='pt-4' >{message}</p>
            </div>

            {
                postImage && (
                    // layout='fill' only works well when you have the parrent with position: relative
                    <div className='relative h-56 md:h-96 bg-white'>
                        <Image src={postImage} objectFit="cover" layout='fill' />
                    </div>
                )
            }


            <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
                <div className='inputIcon rounded-none rounded-bl-2xl'>
                    <ThumbUpIcon className='h-4' />
                    <p className='text-xs sm:text-base'>Like</p>
                </div>


                <div className='inputIcon rounded-none'>
                    <ChatAltIcon className='h-4' />
                    <p className='text-xs sm:text-base'>Comment</p>
                </div>


                <div className='inputIcon rounded-none rounded-br-2xl'>
                    <ShareIcon className='h-4' />
                    <p className='text-xs sm:text-base'>Share</p>
                </div>
            </div>
        </div >
    )
}

export default Post
