import React from 'react';

function Person(props) {
    return (
        <div>
            <h1>Person</h1>
            <p>This page is about 👨 {props.match.params.name}</p>
        </div>
        );
}

export default Person;