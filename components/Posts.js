import { useCollection } from 'react-firebase-hooks/firestore';
import Post from "./Post"
import Photo from "../public/readmePictures/FBHome.png"
import Edit from "./Edit"
import { useState, useEffect } from 'react';
import { db, storage } from "../firebase"
import firebase from "firebase"
import { useStateValue } from "../StateProvider"

// try async, then if that doesn't work try traversing it differently

function Posts({ posts }) {
    const [realtimePosts] = useCollection(
        db.collection("posts").orderBy('timestamp', 'desc')
    )

    const [text, setText] = useState(0)

    // useEffect(() => {
    //     console.log(text)
    // })





    // const [{ user }] = useStateValue()

    // var editButton = document.getElementById("editButton")
    // console.log(editButton)
    // console.log("Post Author: " + { name }.name)
    // console.log("User: " + user.displayName)
    // var postAuthor = { name }.name
    // var loggedInUser = user.displayName






    const editPost = (event) => {
        // console.log(event)
        // console.log(event.target.parentNode.parentNode.parentNode.parentNode.childNodes[2].innerHTML)
        // try to change the text inside the box you clicked on
        var parentNode = event.target.parentNode.parentNode.parentNode.parentNode
        var originalNode = event.target.parentNode.parentNode.parentNode.parentNode.parentNode
        var textFormCheck = document.getElementById("textForm")
        if (!(parentNode.childNodes[3]) && !textFormCheck) {
            var textForm = document.createElement("form")
            var textInput = document.createElement("input")
            var textButton = document.createElement("button")
            parentNode.childNodes[2].setAttribute("class", "hidden")
            textForm.setAttribute("class", "mt-2 flex")
            textForm.setAttribute("id", "textForm")
            textInput.setAttribute("type", "text")
            textInput.setAttribute("class", "rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none")
            textInput.setAttribute("value", parentNode.childNodes[2].innerHTML)
            textInput.setAttribute("id", "textInput")
            textButton.innerHTML = "Submit"
            textButton.setAttribute("class", "ml-3 px-2 bg-gray-200 hover:text-white hover:bg-blue-500 text-center rounded-2xl text-md")
            textButton.addEventListener('click', editSubmit)
            textForm.appendChild(textInput)
            textForm.appendChild(textButton)
            parentNode.appendChild(textForm)
        }

        console.log(parentNode.childNodes[3])

        function editSubmit(event) {
            event.preventDefault()
            var originalPost = parentNode.childNodes[2]
            // the above line is why you're getting the error. Every p tag on the feed has that same id. Instead of grabbing the from the id, grab it by traversing the event
            var updatedPost = document.getElementById("textInput")
            var editForm = document.getElementById("textForm")
            console.log(updatedPost.value)
            console.log(originalPost.innerHTML)
            originalPost.innerHTML = updatedPost.value
            console.log(originalPost)
            editForm.remove()
            originalPost.setAttribute("class", "inline-block pt-4")
            // var dbDocToUpdate = db.collection("posts").doc(originalNode.id)
            db.collection("posts").doc(originalNode.id).update({
                message: originalPost.innerHTML
            })
            // db.collection("posts").doc(variable that represents the name of the doc you're on).set({message: updatedPost.value})

        }



        // when you submit the new text, update the innerHTML to be equal to the new text, and then update the DB
        // DONE: 1. When you press submit, update the innerHTML of the p to the same as the new text, and unhide it
        // DONE: 2. Update the DB when you submit
        // DONE: 3. Make the delete button functional


        // TODO: 4. Make it so that you can only see the edit and delete buttons on posts that you made (could do it with the google auth by comparing something about the user to something about the user who made the post (name of the session user to name of the person who made the post). If that doesn't work, could just do it by name or by photo URL). You want the buttons to be hidden by default, and inline flex (inline block?) if the user matches the poster 

        // EDGE CASE: If a user clicks edit on one status, then clicks edit on another status, if they try to submit an edit on the second status it won't work properly while the edit box is still up on the first status


        // event.target.parentNode.parentNode.parentNode.parentNode.childNodes[2].innerHTML = "it worked!"

        // setText(text + 1)
    }

    const deletePost = (event) => {
        // delete the Post component 
        // delete the DB item
        console.log(event.target.parentNode.parentNode.parentNode.parentNode.parentNode)
        var postTarget = event.target.parentNode.parentNode.parentNode.parentNode.parentNode
        console.log(postTarget.id)
        // postTarget.remove()
        db.collection("posts").doc(postTarget.id).delete().then(() => {
            console.log("document successfully deleted")
        }).catch((error) => {
            console.error("error removing document: ", error)
        })
    }


    // if (text == 1) {
    //     return <Edit
    //     // image={post._delegate._document.data.value.mapValue.fields.image.stringValue}
    //     />
    // }


    return (
        <div>
            {/* the ?. is called "optional chaining", basically what it does is it returns undefined if realtimePosts doesn't exist when it's called */}
            {realtimePosts ?
                realtimePosts?.docs.map((post) => {
                    return <Post
                        keyID={post.id}
                        key={post.id}
                        name={post.data().name}
                        message={post.data().message}
                        // email={post.data().email}
                        timestamp={post.data().timestamp}
                        image={post.data().image}
                        postImage={post.data().postImage}
                        editText={editPost}
                        deletePost={deletePost}
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
                            editText={editPost}
                            deletePost={deletePost}
                        />
                    ))
                )}


        </div>
    )
}

export default Posts

// You npm installed react-firebase-hooks, which lets you use the information from your DB in a much simpler way than normal