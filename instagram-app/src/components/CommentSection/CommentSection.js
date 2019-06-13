import React from 'react';
import PropTypes from "prop-types";

const Comment = (props) => {
    console.log('Comment', props);
    return (
        <div className="comment-section">
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