import PropTypes from 'prop-types'
import React from 'react'
import {v4 as uuidv4} from 'uuid'
const CartItem = ({ data, handleRemoveItem, increaseQuantity, decreaseQuantity }) => { 

    return (
    <>
    
 {data.map((item) => {
   const { name, price, img, quantity } = item;

     return (
    <React.Fragment key={uuidv4()}>
      <div className='flex justify-between max-sm:h-full  max-sm:justify-center pt-5 '>      
           <div className='flex gap-6 max-sm:px-2 pl-4 max-sm:flex-col max-sm:max-w-44'>
                    <img src={img} alt="" className='w-40 h-40 max-sm:w-36 max-sm:h-36'/>
              <div className='flex flex-col gap-y-1 dark:text-creamy'>
                     <h5 className=' font-products text-16 max-sm:text-12 '>{name}</h5>
                     <h5 className='font-montserrat-reg text-16 max-sm:text-12 '>${price}</h5>
              </div>
            </div>
            
         <div className='flex-col gap-24 flex-wrap-reverse  pr-6'>
            <div className="max-sm:pl-2 flex gap-28 max-sm:flex-col max-sm:gap-8">
              <div className="max-sm:pl-2  max-sm:flex max-sm:gap-2 font-products">
                <h5 className='text-dark font-poppins text-16  items-center max-sm:text-12 max-sm:flex hidden dark:text-creamy'>Quantity: </h5>
                <h5 className=' text-16 flex items-center max-sm:text-12 font-Nunito dark:text-creamy'>{quantity}</h5> 
              </div>
              
              <div className="max-sm:pl-2 max-sm:flex max-sm:gap-2 ">
                    <h5 className=' text-dark font-poppins font-bold text-16  items-center max-sm:text-12 max-sm:flex hidden dark:text-creamy'>Total: </h5>
                    <h5 className=' text-16 flex items-center max-sm:text-12 font-Nunito dark:text-creamy'>${quantity*price}</h5> 
              </div>
            </div>
              
             <div className='flex max-sm:gap-6 justify-around  items-center mt-3 p-2 border-2 border-border font-Nunito dark:text-creamy'>
               <div className="flex items-center  w-full justify-center ">
                 <button  onClick={() => increaseQuantity(item)}> + </button>
               </div>
               
                              
               <div className=" flex  w-full justify-center items-center">
                 <button onClick={() => handleRemoveItem(item)}> x </button>
               </div>

               <div className=" flex  w-full justify-center">
                <button onClick={() => decreaseQuantity(item)}> - </button>
               </div>
             </div>
            
          </div>
      </div>
    </React.Fragment>
        )})}
    </>
)
}

CartItem.propTypes = {
    data: PropTypes.array.isRequired,
    numberOfItems: PropTypes.number,
    handleRemoveItem: PropTypes.func,
    increaseQuantity: PropTypes.func,
    decreaseQuantity: PropTypes.func,

}

export default CartItem