import React from "react";

const LikeSection = (props) => {
    return (
        <div className="likes">
            <div className="like-icons" >
                <i className="far fa-heart" onClick={props.addLike}></i>
                <i className="far fa-comment"></i>
            </div>
            <p>{props.likes} likes</p>
        </div>
    );
};

export default LikeSection;