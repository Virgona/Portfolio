import React from 'react';

export default function Header() {
    const headerStyles = {
        display: 'flex',
        alignSelf: 'flex-end',
        backgroundColor: 'lightblue',
        height: '150px',


    }
    return (
        <div style={headerStyles}>
            <h1>Toby's Portfolio</h1>
        </div>
    );
}

