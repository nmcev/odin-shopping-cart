import IncreasingButton from "./IncreasingButton"
import PropTypes from 'prop-types'

const CartItem = ({ data }) => { 
    const { name, img, price } = data;
    return (
    
    <div className='flex justify-between max-sm:h-full  '>      
        <div className='flex gap-6 max-sm:px-2 pl-4'>
                    <img src={img} alt="" className='w-40 h-40 max-sm:w-28 max-sm:h-28'/>
            <div className='flex flex-col gap-y-1'>
                     <h5 className=' font-products text-16 max-sm:text-12'>{name}</h5>
                     <h5 className='font-montserrat-reg text-16 max-sm:text-12 '>${price}</h5>
            </div>
        </div>
            
        <div className='flex gap-16 flex-wrap-reverse max-sm:gap-2 '>
               <IncreasingButton />
            <div className="max-sm:pl-2">
                <h5 className='font-montserrat-reg text-16 flex items-center max-sm:text-12'>$1,000</h5> 
            </div>
        </div>
    </div>
  )
}

CartItem.propTypes = {
    data: PropTypes.object.isRequired,
    }

export default CartItem