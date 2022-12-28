import Head from 'next/head'
import Users from '../components/users/Users'

 const Home = () => {

  return (
    <>
      <Head>
        <title>Proxy Band | Alexandr Bochev</title>
        <meta name="description" content="Proxy Band" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Users />
      </main>
    </>
  )
}
export default Home