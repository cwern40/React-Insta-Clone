import React from 'react';
import CommentInput from './CommentInput';
import './Comment.css'
import PropTypes from "prop-types";

const Comment = (props) => {
    console.log('Comment', props);
    return (
        <div className="comment-section">
            <div className="comments">
            {props.comment.map(comment => (
                <div key={comment.id} className="comment">
                    <p className="user">
                        {comment.username}
                    </p>
                    <p className="comment-text">
                        {comment.text}
                    </p>
                </div>
            ))}
            </div>
            <CommentInput />
        </div>
    );
};

Comment.propTypes = {
    comment: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            username: PropTypes.string,
            text: PropTypes.string
        })
    )
}

export default Comment;