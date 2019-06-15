import React from "react";
import Comment from '../CommentSection/CommentSection';
import './Post.css';

const PostContainer = (props) => {
    console.log('Post Container', props);
    return (
        <div className='all-posts'>
            {props.post.map(post => (
                <div className='post-container'>
                <div key={post.id} className="post">
                    <div className="user-id">
                        <img src={post.thumbnailUrl} alt="User profile" />
                        <p>{post.username}</p>
                    </div>
                    <div className="image">
                        <img src={post.imageUrl} alt="Post" />
                    </div>
                    <div className="likes">
                        <div className="like-icons">

                        </div>
                        <p>{post.likes} likes</p>
                    </div>
                </div>
                <Comment comment={post.comments} />
                </div>
            ))}
        </div>
    );
}

export default PostContainer;