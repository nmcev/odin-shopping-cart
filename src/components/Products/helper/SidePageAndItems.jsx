import AsidePage from './AsidePage';
import PropTypes from 'prop-types';

function SidePageAndItems({ children }) {

    return (
        <section className='md:grid grid-cols-1-3 flex flex-col md:items-start items-center md:pt-12 pt-5'>

            <AsidePage />
            <div className='max-sm:pt-6'>
                {children}
            </div>

        </section>
  )
}

SidePageAndItems.propTypes = {
    children: PropTypes.node.isRequired,
};

export default SidePageAndItems;
