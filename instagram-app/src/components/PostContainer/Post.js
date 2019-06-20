import React from "react";
import LikeSection from './LikeSection';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            likes: props.post.likes
        }
    };

    addLike = () => {
        let likes = this.state.likes +1;
        this.setState({
            likes: likes
        })
    }

    render() {
        return(
            <div className="post">
                <div className="user-id">
                    <img src={this.props.post.thumbnailUrl} alt="User profile" />
                    <p>{this.props.post.username}</p>
                </div>
                <div className="image">
                    <img src={this.props.post.imageUrl} alt="Post" />
                </div>
                <LikeSection likes={this.state.likes} addLike={this.addLike} />
            </div>
        );
    };
};

export default Post;