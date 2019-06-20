import React from 'react';
import CommentInput from './CommentInput';
import './Comment.css'
import PropTypes from "prop-types";

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            comments: props.comments,
            newcomment: ""
        }
    }

    commentHandler = e => {
        this.setState({ newcomment: e.target.value});
    };

    addNewComment = e => {
        e.preventDefault();
        const newComment = { text: this.state.newcomment, username: 'test' };
        const currentcomments = [...this.state.comments, newComment];
        this.setState({
            comments: currentcomments,
            newcomment: ''
        });
    };

    render() {
        return (
            <div className="comment-section">
                <div className="comments">
                {this.state.comments.map(comment => (
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
                <CommentInput addNewComment={this.addNewComment} commentHandler={this.commentHandler} comment={this.state.newcomment}/>
            </div>
        );
    }
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

export default CommentSection;