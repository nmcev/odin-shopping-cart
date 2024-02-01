import  cart  from '../../assets/icons/cart.svg'
import { Link } from 'react-router-dom'
import { useCart } from '../../hooks/CartContext'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
function NavLinks({onClose}) {
    const { quantity } = useCart();
    const [totalQuantity, setTotalQuantity] = useState(quantity);

    useEffect(() => {
        setTotalQuantity(quantity);
    }, [quantity]);


    return ( 
    <nav>
        <ul className=" cursor-pointer flex md:flex-row flex-col  md:text-xl text-sm items-center gap-12 text-lilac font-extrabold uppercase font-poppins">
            <Link to="/" onClick={onClose}>Home</Link>
            <Link to="products" onClick={onClose}>Products</Link>
          
            <Link to='about' onClick={onClose}>
                 About
            </Link>
            
            <Link to='cart' onClick={onClose} >
                <button className='relative flex items-center p-4 text-white'>
                     <img
                         src={cart}
                        alt="cart logo"
                        className='w-6 mr-2'
                    />
       
                 <span className="cart-item-count flex justify-center  absolute top-1 max-sm:top-0 right-2 max-sm:left-10 rounded-full  text-sm text-orange max-sm:text-creamy max-sm:bg-red-500 ">
                    {totalQuantity > 0 ? totalQuantity: "" }
                 </span>
      
                </button>
            </Link>
            
        </ul>
    </nav>
     )
}

NavLinks.propTypes = {
    onClose: PropTypes.func,
}

export default NavLinks