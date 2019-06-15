import React from 'react';

const Searchbar = (props) => {
    return (
        <div className="search-bar">
            <div className="icon">
            </div>
            <div className="search-input">
                <input type="text" placeholder="Search..." />
            </div>
        </div>
    );
};

export default Searchbar;