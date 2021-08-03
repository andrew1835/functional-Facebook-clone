import { getSession } from 'next-auth/client'
import Head from 'next/head'
import Header from '../components/Header'
import Login from "../components/Login"


// you're passing in 'session' here, which is taken from the object you return at the bottom of the page (aka props.session)
export default function Home({ session }) {
  if (!session) {
    return <Login />
  }
  return (
    <div>
      <Head>
        <title>Facebook Clone</title>
      </Head>



      {/* Header */}
      <Header />

      <main>
        {/* Sidebar */}
        {/* Feed */}
        {/* Widgets */}
      </main>
    </div>
  )
}


export async function getServerSideProps(context) {
  // "context" is the request that goes through when a user tries to go to the my site
  const session = await getSession(context)

  return {
    props: {
      session
    }
  }
}