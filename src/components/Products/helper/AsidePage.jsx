import { NavLink, useLocation } from "react-router-dom";

function AsidePage() {
  const location = useLocation();

  const isLinkActive = (path) => {
    return location.pathname === path;
  };

  return (
    <aside className='flex'>
      <div className='md:pl-16 flex md:flex-col gap-1 items-start'>
        <button className='font-montserrat-reg text-base'>
          <NavLink to='/products' className={isLinkActive('/products') ? 'text-lime-700 font-semibold' : ''}>
            SHOP ALL
          </NavLink>
        </button>

        <ul className='flex md:flex-col gap-2 font-products text-dimGray text-16'>
          <NavLink to='/products/under30' className={isLinkActive('/products/under30') ? 'text-lime-700 font-semibold' : ''}>
            under 30
          </NavLink>
          <NavLink to='/products/under50' className={isLinkActive('/products/under50') ? 'text-lime-700 font-semibold' : ''}>
            under 50
          </NavLink>
          <NavLink to='/products/under100' className={isLinkActive('/products/under100') ? 'text-lime-700 font-semibold' : ''}>
            under 100
          </NavLink>
        </ul>
      </div>
    </aside>
  );
}

export default AsidePage;
