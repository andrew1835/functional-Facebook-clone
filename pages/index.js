import Head from 'next/head'
import Header from '../components/Header'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Facebook Clone</title>
      </Head>

      <h1>Let's build Facebook!</h1>

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
