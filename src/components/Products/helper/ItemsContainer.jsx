import PropTypes from 'prop-types'
function ItemsContainer({children}) {
    return (
        <div className='md:pr-20 md:gap-0 px-0 flex flex-wrap max-sm:justify-center gap-5 '>
            {children}
         </div>
  )
}

ItemsContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ItemsContainer;
