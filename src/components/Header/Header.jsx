import  { useState } from 'react';
import MobileNav from './MobileNav';
import menu from '../../assets/icons/menu.svg';
import NavLinks from './NavLinks'
import { Link } from 'react-router-dom';
import Switcher from '../../Switcher'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="flex justify-between items-center bg-creamy p-6 fixed w-full shadow-md z-30 dark:bg-zinc-800">
        <div className="flex items-center pl-2 md:pl-20">
          <Link to='/'>
          <h1  className=" font-header text-2xl text-lilac p-2 ">
            Craft Glow
          </h1>
          </Link>
        </div>

        <div className="pr-0 md:pr-56">
          <button
            className="lg:hidden text-lilac"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <img src={menu} alt="menu" className="w-8 h-8" />
         </button>
                  
          <div className='lg:flex hidden  lg: items-center gap-12'>
            <NavLinks />
          <div className={`flex justify-center items-center transition duration-200 `}>
          <Switcher />
        </div>
          </div>
        </div>
      </header>

        <MobileNav isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
}

export default Header;
