import React from 'react';

function Location(props) {
    return (
        <div>
            <h1>Location:</h1>
            <p>This page is about 🏙️ {props.match.params.name}</p>
        </div>
        );
}

export default Location;