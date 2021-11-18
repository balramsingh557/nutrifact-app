import React from 'react';

export default function FoodCard(props) {

    const cardStyle = {
        backgroundImage: `url(${props.image})`,
        backgroundSize: "cover",
    }

    const actionStyle = {
        backgroundColor: "rgba(0,0,0,.4)"
    }

    return (
        <div className="card white-text" style={cardStyle}>
        <div className="card-content" style={{backgroundColor: "rgba(0,0,0,.4)"}}>
            <span className="card-title" style={{fontWeight: "400"}}>{props.service}</span>
            <p>{props.description}</p>
        </div>
        <div className="card-action" style={actionStyle}>
            <button className="btn orange waves-effect waves-light">Open</button>
        </div>
        </div>
    )
}
