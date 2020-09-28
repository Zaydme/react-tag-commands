import React from 'react';
import moment from "moment";

function Time(props) {
    return (
        <div>
            <h1>Time</h1>
            <p>This page is about ⌛ {props.match.params.time}</p>
            <p>The time is ending {moment(props.match.params.time).fromNow()}</p>
        </div>
        );
}

export default Time;