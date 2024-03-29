import AsidePage from './AsidePage';
import PropTypes from 'prop-types';

function SidePageAndItems({ children }) {

    return (
        <section className='md:grid grid-cols-1-3 flex flex-col md:items-start items-center md:pt-12 pt-5'>

            <AsidePage />
            <div className='max-md:pt-6 sm:pl-10  max-md:flex max-md:items-center max-md:flex-col'>
                {children}
            </div>

        </section>
  )
}

SidePageAndItems.propTypes = {
    children: PropTypes.node.isRequired,
};

export default SidePageAndItems;
