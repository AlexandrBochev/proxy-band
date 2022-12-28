import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from './Posts.module.scss'

const Posts = ({ props }) => {

  const [close, setClose] = useState(styles.close)
  const [posts, setPosts] = useState(null)

  const fetchData = async () => {
    setClose(styles.post)
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${props.id}/posts`)
      const data = await response.json()
      setPosts(data)
    } catch (error) {
      alert( "Oops! Something went wrong!" )
    } 
  }

  useEffect(() => { 
    fetchData()
  }, [])

  return (
    <div className={close}>
      <a href='/'><div className={styles.post__background} onClick={() => setClose(styles.close)}></div></a>
      <div className={styles.post__poup}>
        <h3 className={styles.title}>{props.name} posts:</h3>
        <ul>
          { posts && posts.map(post => <li key={post.id}>{post.title}</li>) }
        </ul>
        <a href='/'><button onClick={() => setClose(styles.close)}>Close</button></a>
      </div>
    </div>
  )
}

export default Posts