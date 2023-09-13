import { useEffect } from 'react';
import { useState } from 'react';
import Card from '../card/card';
import PropTypes from 'prop-types';

const Cards = ({ handleCLick }) => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch("cricket.json")
            .then(res => res.json())
            .then(data => setCards(data));
    }, [])
    return (
        <div className='w-[75%] mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto'>
                {
                    cards.map((card) => <Card key={card.id} card={card} handleCLick={handleCLick}></Card>)
                }
            </div>
        </div>
    );
};


Cards.propTypes = {
    handleCLick:PropTypes.func
};

export default Cards;