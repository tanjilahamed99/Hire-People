import PropTypes from 'prop-types';

const Card = ({ card, handleCLick }) => {
    const { name, age, role, image, salary, country } = card
    return (
        <div className='mx-auto border-2 border-gray-400 p-10  text-center space-y-2'>
            <img className='w-[200px] h-[200px] mx-auto rounded-lg' src={image} alt="" />
            <h2 className='font-bold text-2xl'>{name}</h2>
            <h2 className='text-lg font-medium'>Age: {age}</h2>
            <h2 className='text-lg font-medium'>salary: {salary}$</h2>
            <h2 className='text-lg font-medium'>{role}</h2>
            <h2 className='text-lg font-medium'>Country:{country}</h2>
            <button onClick={()=>handleCLick(card)} className='px-5 py-3 rounded-lg bg-purple-600 text-white'>Hire</button>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.array,
    handleCLick:PropTypes.func
};

export default Card;