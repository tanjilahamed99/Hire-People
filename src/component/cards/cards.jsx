import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';
import Card from '../card/card';

const Cards = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch("cricket.json")
            .then(res => res.json())
            .then(data => setCards(data));
    }, [])
    return (
        <div>
            <h2>hello</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto'>
                {
                    cards.map((card) => <Card key={card.id} card={card}></Card>)
                }
            </div>
        </div>
    );
};

Cards.propTypes = {

};

export default Cards;