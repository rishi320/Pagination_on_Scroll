import React from "react";
import "./Card.css";

function Card({data}){

    return(<div className="card">
        <img src={data.thumbnail} className="card-image"/>
        <p className="card-text">{data.title}</p>
    </div>)
}

export default Card;
