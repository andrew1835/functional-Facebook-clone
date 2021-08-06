import Image from "next/image"
import { useSession } from "next-auth/client"
import { EmojiHappyIcon, PhotographIcon } from "@heroicons/react/outline"
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/solid'
import { useRef, useState } from "react"
import { db, storage } from "../firebase"
import firebase from "firebase"



function InputBox() {
    const [session] = useSession()
    const inputRef = useRef(null)
    const imageFileRef = useRef(null)
    const [imageToPost, setImageToPost] = useState(null)

    const sendPost = (event) => {
        event.preventDefault()

        if (!inputRef.current.value) {
            return
        }

        db.collection("posts").add({
            message: inputRef.current.value,
            name: session.user.name,
            email: session.user.email,
            image: session.user.image,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then(doc => {
            if (imageToPost) {
                const uploadTask = storage.ref(`posts/${doc.id}`).putString(imageToPost, 'data_url')

                removeImage()

                uploadTask.on('state_change', null, error => {
                    console.error(error)
                }, () => {
                    // ('posts').child(doc.id) is the same as (`posts/${doc.id}`). It's up to you which way you choose to type it
                    storage.ref(`posts`).child(doc.id).getDownloadURL().then(url => {
                        db.collection('posts').doc(doc.id).set({
                            postImage: url
                        },
                            // If you don't type in { merge: true }, the whole post will be replaced by the image URL, as opposed to the image URL being added on to the existing post information in the DB
                            { merge: true }
                        )
                    })
                })
            }
        })

        inputRef.current.value = ""
    }

    const addImageToPost = (event) => {
        const reader = new FileReader()
        if (event.target.files[0]) {
            reader.readAsDataURL(event.target.files[0])
        }

        reader.onload = (readerEvent) => {
            setImageToPost(readerEvent.target.result)
        }

    }

    const removeImage = () => {
        setImageToPost(null)
    }

    var firstName = session.user.name.split(" ")

    return (
        <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6'>

            <div className="flex space-x-4 p-4 items-center">
                <Image className="rounded-full" src={session.user.image} width={40} height={40} layout="fixed" />
                <form className='flex flex-1'>
                    <input type="text" placeholder={`What's on your mind, ${firstName[0]}?`} className='rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none' ref={inputRef} />
                    <button hidden type='submit' onClick={sendPost}>Submit</button>
                </form>

                {imageToPost && (
                    <div onClick={removeImage} className='flex flex-col filter hover:brightness-110 transition duration-150  hover:scale-105 cursor-pointer'>
                        <img src={imageToPost} alt="Image the user has selected to upload (if applicable)." className="h-10 object-contain" />
                        <p className='text-xs text-red-500 text-center'>Remove</p>
                    </div>
                )}
            </div>


            <div className='flex justify-evenly p-3 border-t'>

                {/* This makes it so that clicking on the div clicks on the hidden input field with the addImageToPost onClick function call */}
                <div className='inputIcon'>
                    <VideoCameraIcon className='h-7 text-red-500' />
                    <p className='text-xs sm:text-sm xl:text-base'>Live Video</p>
                </div>

                <div onClick={() => imageFileRef.current.click()} className='inputIcon'>
                    <PhotographIcon className='h-7 text-green-400' />
                    <p className='text-xs sm:text-sm xl:text-base'>Photo/Video</p>
                    <input ref={imageFileRef} type="file" hidden onChange={addImageToPost} />
                </div>


                <div className='inputIcon'>
                    <EmojiHappyIcon className="h-7 text-yellow-300" />
                    <p className='text-xs sm:text-sm xl:text-base'>Feeling/Activity</p>
                </div>


            </div>



        </div>
    )
}

export default InputBox
