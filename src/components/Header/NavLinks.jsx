import  cart  from '../../assets/icons/cart.svg'
import searchLogo from '../../assets/icons/search.svg'
import { Link } from 'react-router-dom'

function NavLinks() {
    return ( 
    <nav>
        <ul className=" cursor-pointer flex md:flex-row flex-col  md:text-xl text-sm items-center gap-12 text-lilac font-extrabold uppercase font-poppins">
            <Link to="/">Home</Link>
            <Link to="products">Products</Link>
          
            <Link to='cart'>
                <button className='relative flex items-center p-2 text-white'>
                     <img
                         src={cart}
                        alt="cart logo"
                        className='w-6 mr-2'
                    />
       
                 <span className="cart-item-count ml-8 rounded-full absolute top-0 right-0 text-sm text-orange">
                      10
                 </span>
      
                </button>
            </Link>
            
            <li>
                <img src={searchLogo} alt="search" />
            </li>
        </ul>
    </nav>
     )
}

export default NavLinks