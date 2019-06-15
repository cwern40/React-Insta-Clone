import React from "react";
import CommentSection from '../CommentSection/CommentSection';
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
                        <i class="far fa-heart"></i>
                        <i class="far fa-comment"></i>
                        </div>
                        <p>{post.likes} likes</p>
                    </div>
                </div>
                <CommentSection comments={post.comments} />
                </div>
            ))}
        </div>
    );
}

export default PostContainer;