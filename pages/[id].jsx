import Link from "next/link"

export const getServerSideProps = async (context) => {
  const { id } = context.params
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums`)
  const data = await response.json()

  return {
    props: { albums: data }
  }
}

const Albums = ({ albums }) => {

  return (
    <>
      <h1>Albums</h1>
      <ul>
        { albums.map(album => <li key={album.id}>{album.title}</li>) }
      </ul>
      <button><Link href='/'>Back to users</Link></button>
    </>
  )
}

export default Albums