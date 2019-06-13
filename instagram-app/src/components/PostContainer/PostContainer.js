import React from "react";
import Comment from '../CommentSection/CommentSection';
import './Post.css';

const PostContainer = (props) => {
    console.log('Post Container', props);
    return (
        <div className='post-container'>
            {props.post.map(post => (
                <>
                <div key={post.id} className="post">
                    <div className="user-id">
                        <img src={post.thumbnailUrl} />
                        <p>{post.username}</p>
                    </div>
                    <div className="image">
                        <img src={post.imageUrl} />
                    </div>
                    <div className="likes">
                        <div className="like-icons">

                        </div>
                        <p>{post.likes}</p>
                    </div>
                </div>
                <Comment comment={post.comments} />
                </>
            ))}
        </div>
    );
}

export default PostContainer;