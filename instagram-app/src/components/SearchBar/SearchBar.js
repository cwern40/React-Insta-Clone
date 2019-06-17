import React from 'react';
import './SearchBar.css'

const Searchbar = (props) => {
    return (
        <div className="search-bar">
            <div className="icon">
            <i className="fab fa-instagram"></i>
            </div>
            <div className="search-input">
                <input type="text" placeholder="Search..." />
            </div>
        </div>
    );
};

export default Searchbar;