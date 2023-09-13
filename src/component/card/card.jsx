import PropTypes from 'prop-types';

const Card = ({ card }) => {
    const { name, age, role, image, salary, country } = card
    return (
        <div className='mx-auto border-2 border-gray-400 p-10 text-center spy-5'>
            <img src={image} alt="" />
            <h2>{name}</h2>
            <h2>Age: {age}</h2>
            <div className='flex items-center'>
                <h2>Salary: {salary}$</h2>
                <h2>{role}</h2>
            </div>
            <h2>Country:{country}</h2>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.array

};

export default Card;