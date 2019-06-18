import React from "react";
import CommentSection from '../CommentSection/CommentSection';
import Post from './Post'
import './Post.css';

const PostContainer = (props) => {
    console.log('Post Container', props);
    return (
        <div className='all-posts'>
            {props.post.map(post => (
                <div className='post-container' key={post.imageUrl}>
                    <Post post={post} />
                    <CommentSection comments={post.comments} />
                </div>
            ))}
        </div>
    );
}

export default PostContainer;