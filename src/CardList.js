import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    const cardsArray = robots.map((robot) => {
        let key = robot.id;
        return (
            <Card key={key} id={robot.id} name={robot.name} email={robot.email}/>
        );
    });
    return (
        cardsArray
    );
}

export default CardList;