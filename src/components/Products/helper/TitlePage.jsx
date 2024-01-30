import PropTypes from 'prop-types';
function TitlePage({ text, description }) {
    return (
        <div className="grid place-items-center font-products text-xl uppercase text-products dark:text-silver">
            <h1 className=' mb-4 mt-8 text-center font-montserrat-reg'>{text}</h1>
            <p className='text-sm max-w-lg mx-auto text-center font-products mb-8 '>
                {description}
                </p>

            <div className=' w-full border-2 border-border h-8 row-span-1 border-r-0 border-l-0'></div>
        </div> 
  )
}

TitlePage.propTypes = {
    text: PropTypes.string.isRequired,
    description: PropTypes.string,
}

TitlePage.defaultProps = {
    text: 'Candle Collection Under $30',
    description: 'Explore our budget-friendly candle selection – all under $30. From calming scents to stylish designs, find affordable candles to light up your space or gift to loved ones.',
}

export default TitlePage