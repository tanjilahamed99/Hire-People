import PropTypes from 'prop-types';

const Hire = ({ card,total,remaining }) => {
    return (
        <div className='md:w-[25%] w-full mx-auto'>
            <h2 className='text-center font-bold text-xl'>hire people list</h2>
            <h3 className='font-semibold text-center text-lg'>salary:{total} $</h3>
            <h3 className='font-semibold text-center text-lg'>remaining:{remaining} $</h3>
            <div className='text-center bg-purple-600 rounded-lg w-1/2 mx-auto md:p-5 py-3 text-white'>
                {
                    card.map((nam,idx) => <h2 className='font-semibold text-lg' key={idx}>{nam.name}</h2>)
                }
            </div>
        </div>
    );
};

Hire.propTypes = {
    card: PropTypes.array,
    total: PropTypes.number,
    remaining: PropTypes.number
};

export default Hire;