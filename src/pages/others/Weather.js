import React from 'react';

function Weather(props) {
    let emoji;
    switch (props.match.params.name.toLowerCase()) {
        case "rainy":
            emoji = "🌧️"
            break;
        case "snowy":
            emoji = "❄️"
            break;
        default:
            emoji = "☀️"
            break;
    }

    return (
        <div>
            <h1>Weather</h1>
            <p>This page is about {emoji} {props.match.params.name} weather</p>
            
        </div>
        );
}

export default Weather;