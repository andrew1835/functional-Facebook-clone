import { getSession } from 'next-auth/client'
import Head from 'next/head'
import Header from '../components/Header'
import Login from "../components/Login"
import Sidebar from "../components/Sidebar"
import Feed from "../components/Feed"
import Widgets from "../components/Widgets"
import { db } from '../firebase'



// you're passing in 'session' here, which is taken from the object you return at the bottom of the page (aka props.session)
export default function Home({ session, posts }) {
  if (!session) {
    return <Login />
  }
  return (
    <div className='h-screen'>
      <Head>
        <title>Facebook Clone</title>

      </Head>



      {/* Header */}
      <Header />

      <main className="flex bg-gray-100">
        {/* Sidebar */}
        <Sidebar />
        {/* Feed */}
        <Feed posts={posts} />

        {/* Widgets */}
        <Widgets />
      </main>
    </div>
  )
}


export async function getServerSideProps(context) {
  // "context" is the request that goes through when a user tries to go to the my site
  const session = await getSession(context)

  const posts = await db.collection("posts").orderBy("timestamp", "desc").get()

  // the data from the posts is being pre-fetched on the browser
  const docs = posts.docs.map(post => ({
    id: post.id,
    ...post.data(),
    timestamp: null

  }))

  return {
    props: {
      session,
      posts: docs
    }
  }
}