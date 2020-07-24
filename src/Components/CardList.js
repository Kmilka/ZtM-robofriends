import React from 'react';
import Card from './Card.js';

const CardList = ( {robots} ) => {
    return (
    <div>
        {
        robots.map((user,i) => 
        <Card 
            aria-label='list of robo cards'
            key={i} 
            id={user.id} 
            name={user.name} 
            email={user.email}
        />
        )}
    </div>);
};

export default CardList;