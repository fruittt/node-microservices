import React from 'react'

function CommentList({ comments }) {
  if (!comments) {
    return (
      <div></div>
    ) 
  }
  const renderedComments = Object.values(comments).map(comment => {
    let content;
    if (comment.status === 'approved') {
      content = comment.content;
    }
    if (comment.status === 'pending') {
      content = 'this comment is awaiting moderation'; 
    }
    if (comment.status === 'rejected') {
      content = 'this comment has been rejected';
    }
    return (
      <li className='comment' key={comment.id}>
        {content}
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