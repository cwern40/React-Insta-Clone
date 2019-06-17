import React from "react";

const LikeSection = (props) => {
    return (
        <div className="likes">
            <div className="like-icons" >
                <i class="far fa-heart" onClick={props.addLike}></i>
                <i class="far fa-comment"></i>
            </div>
            <p>{props.likes} likes</p>
        </div>
    );
};

export default LikeSection;