import React from 'react';
import './Card.css';

class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <img id='banana__img' src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg" alt="Banana"></img>
                    <div className="container">
                        <h4><b>Banana</b></h4>
                        <p>One kg of Banana</p>
                    </div>
            </div> 
        );
    }
} 

export default Card