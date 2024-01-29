import { NavLink, useLocation } from "react-router-dom";

function AsidePage() {
  const location = useLocation();

  const isLinkActive = (path) => {
    return location.pathname === path;
  };

  return (
    <aside className='flex md:sticky md:top-48'>
      <div className='md:pl-16 flex md:flex-col gap-1 items-start max-sm:gap-4 max-sm:items-center max-sm:px-2'>
        <button className='font-montserrat-reg text-base max-sm:text-14'>
          <NavLink to='/products' className={isLinkActive('/products') ? 'text-dark font-semibold' : ''}>
            SHOP ALL
          </NavLink>
        </button>

        <ul className='flex md:flex-col gap-4 font-products text-dimGray text-16 max-sm:text-12'>
          <NavLink to='/products/under30' className={isLinkActive('/products/under30') ? 'text-dark font-semibold' : ''}>
            Gifts under 30$
          </NavLink>
          <NavLink to='/products/under50' className={ isLinkActive('/products/under50') ? 'text-dark font-semibold' : ''}>
            Gifts under 50$
          </NavLink>
          <NavLink to='/products/under100' className={isLinkActive('/products/under100') ? 'text-dark font-semibold' : ''}>
            Gifts under 100$
          </NavLink>
        </ul>
      </div>
    </aside>
  );
}

export default AsidePage;
