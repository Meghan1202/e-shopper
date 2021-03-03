import React from 'react';
import './Card.css';

export default function Card(props) {
    return (
        <div className="card">
            <img id='banana__img' src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg" alt="Banana"></img>
            <div className="container">
                <h4><b>{props.value}</b></h4>
                <p>One kg of {props.value}</p>
            </div>
        </div>
    );
}
