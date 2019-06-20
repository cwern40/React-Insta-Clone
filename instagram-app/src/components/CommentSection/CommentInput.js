import React from 'react';

const CommentInput = (props) => {
    return (
    <form onSubmit={props.addNewComment}>
        <input type="text" placeholder="Add Comment..." value={props.comment} onChange={props.commentHandler}/>
    </form>
    );
};

export default CommentInput;