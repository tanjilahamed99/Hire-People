import PropTypes from 'prop-types';

const Hire = ({ name }) => {
    console.log(name);
    return (
        <div className='w-[30%]'>
            <h2 className='text-center font-bold text-xl'>hire people list</h2>
            <div className='text-center'>
               {
                name.map((nam)=><h2 key={nam.id}>{nam.name}</h2>)
               }
            </div>
        </div>
    );
};

Hire.propTypes = {
    name: PropTypes.array
};

export default Hire;