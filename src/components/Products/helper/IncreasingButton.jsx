import PropTypes from 'prop-types'
function IncreasingButton({ handleIncrease, handleDecrease, numberOfItems}) {
    return (
    <div className='flex flex-col '>
      <div className='flex gap-6 border-2 border-border justify-start p-2 px-3 text-18 font-Nunito'>
        <button onClick={handleDecrease} className='cursor-pointer dark:text-creamy'>
         <span> - </span>
        </button>

        <div>
         <span className='dark:text-creamy'>{numberOfItems}</span>
        </div>

      <button   onClick={handleIncrease} className=' cursor-pointer dark:text-creamy'>
        <span> + </span>
      </button>
     </div>
   </div>
  )
}

IncreasingButton.propTypes = {
    handleIncrease: PropTypes.func.isRequired,
    handleDecrease: PropTypes.func.isRequired,
    numberOfItems: PropTypes.number.isRequired,
}

IncreasingButton.defaultProps = {
  handleDecrease: () => { },
  handleIncrease: () => { },
    numberOFItems: 1,
}

export default IncreasingButton;
