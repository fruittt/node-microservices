import React, {useState, useEffect} from 'react'
import axios from 'axios'
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';
function PostList() {
  const [posts, setPosts] = useState({});
  const fetchPosts = async () => {
    const res = await axios.get('http://posts.com/posts');
    setPosts(res.data.posts); 
  }
  useEffect(() => {
    fetchPosts(); 
  }, []);
  const renderedPosts = Object.values(posts).map(post => {
    return (
      <div className='card' style={{width: '18rem' ,marginBottom: '20px'}} key={post.id}>
        <div className='card-body'>
          <h5 className='card-title'>{post.title}</h5> 
          <CommentList comments={post.comments} />
          <CommentCreate postId={post.id} />
        </div>
      </div>
    ) 
  })
  return (
    <div className='d-flex flex-row flex-wrap justify-contnet-bwtween'>
      {renderedPosts}
    </div>
  )
}

export default PostList