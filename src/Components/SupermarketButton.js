// Components/SupermarketButton.js

import React from 'react';

function SupermarketButton({ iconPath, supermarket, onClick, className }) {
    return (
        <button className={className} onClick={() => onClick(supermarket)}>
            <img src={iconPath} alt={`${supermarket} logo`} />
        </button>
    );
}

export default SupermarketButton;
