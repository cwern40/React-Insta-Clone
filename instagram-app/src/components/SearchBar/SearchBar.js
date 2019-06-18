import React from 'react';
import './SearchBar.css'

const Searchbar = (props) => {

    return (
        <div className="search-bar">
            <div className="insta-icon">
                <i className="fab fa-instagram"></i>
            </div>
            <div className="search-input">
                <input type="text" placeholder="Search..." onKeyDown={props.searchHandler}/>
            </div>
            <div className="right-icons">
                <i class="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user"></i>
            </div>
        </div>
    );
};

export default Searchbar;