import PostComponent from './Post'
import { useState } from 'react'
function App() {
  const [posts, setPosts] = useState([])

  const postComponents = posts.map((post) => (
    <PostComponent
      name={post.name}
      subtitle={post.subtitle}
      time={post.title}
      image={post.image}
      description={post.description}
    />
  ))

  function addPost() {
    setPosts([
      ...posts,
      {
        name: 'harkrit',
        subtitle: '1000 followers',
        time: '2m ago',
        image:
          'https://m.media-amazon.com/images/M/MV5BMzVjNDRkMTYtMTczYS00ZTEyLWI3NTQtYTc3NWE4MTY3OGNkXkEyXkFqcGdeQWRvb2xpbmhk._V1_.jpg',
        description:
          'what to know how to win big?Check out how these folks won $6000 in bounties',
      },
    ])
  }
  return (
    <div style={{ background: '#dfe6e9', height: '100vh' }}>
      <button onClick={addPost}>Add post</button>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div>{postComponents}</div>
      </div>
    </div>
  )
}
