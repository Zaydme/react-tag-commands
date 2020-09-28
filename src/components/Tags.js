import React from "react";
import moment from "moment";
import styled from "styled-components";
import { Link  } from "react-router-dom";

const StyledTag = styled(Link)`
    padding: 5px;
    background-color: #fffd75aa;
    border-raduis: 5px;
`;

export function PersonTag ({text}) {
    return (
        <StyledTag to={`/person/${text}`}>👨 {text}</StyledTag>
    )
}

export function LocationTag ({text}) {
    return (
        <StyledTag to={`/location/${text}`}>🏙️ {text}</StyledTag>
    )
}

export function TimeTag ({text}) {
    return (
        <StyledTag to={`/time/${text}`}>⌛ {moment(text).fromNow()}</StyledTag>
    )
}

export function WeatherTag ({text}) {
    let emoji;
    switch (text.toLowerCase()) {
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
    <StyledTag to={`/weather/${text}`}>{emoji} {text}</StyledTag>
    )
}