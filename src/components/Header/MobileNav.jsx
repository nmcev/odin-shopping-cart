import PropTypes from 'prop-types';
import NavLinks from './NavLinks';

const MobileNav = ({ isOpen, onClose }) => {
  return (
    <div
          className={`fixed top-0 left-0 w-full h-80 mt-24 bg-black z-50 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} 
                    transition-opacity duration-300 ease-in-out`} >
          
      <div className="flex justify-end p-4">
         <button onClick={onClose} className="text-lilac text-2xl" aria-label="Close Menu">
          &times;
         </button>      
      </div>

         <div className='flex justify-center items-center'>
              <NavLinks onClose={onClose}/>
         </div>
    </div>
  );
};

MobileNav.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default MobileNav;
