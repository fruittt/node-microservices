import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios';

function CommentList({ postId }) {
  const [comments, setComments] = useState({});
  // 使用 useCallback 包裹函数以稳定引用
  const fetchComments = useCallback(async () => {
    const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`);
    setComments(res.data);
  }, [postId]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);
  const renderedComments = Object.values(comments).map(comment => {
    return (
      <li className='comment' key={comment.id}>
        {comment.content}
      </li>
    ) 
  })
  return (
    <ul>
      {renderedComments}
    </ul>
  )
}

export default CommentList