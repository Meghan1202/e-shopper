import React from 'react';
import Card from './Card';
import './Home.css';
import NavBar from './NavBar';

export default class Home extends React.Component {
    renderCard(i) {
        return (
            <Card value={"Banana"}
                index={i}
            />
        );
    }

    render() {
        return (
            <>
                <NavBar value={"3 items added"} />
                <h3> Fruits And Vegitables</h3>
                <div className="card__row">
                    {this.renderCard(0)}
                    {this.renderCard(1)}
                    {this.renderCard(2)}
                    {this.renderCard(3)}
                </div>
            </>
        );
    }
}
