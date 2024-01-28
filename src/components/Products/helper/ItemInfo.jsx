import PropTypes from 'prop-types'
import IncreasingButton from './IncreasingButton'
import './item.css' 
function ItemInfo({ data, id, handleAddToCart, numberOfItems, handleIncrease, handleDecrease}) {  
  return (
    <div className='flex md:mb-12 mb-9  xl:pl-52 md:gap-24 md:pl-12 sm:gap-20 max-sm:flex-col'> 
    <img src={data[id].img} alt="" className='animate-fadeInUp sm:max-w-full max-w-44 sm:h-full' />
    <div className="md:max-w-96 max-w-48 pr-10  text-12 gap-y-2 flex flex-col  max-sm:pt-5">
        <h1 className=' tracking-wider text-18 font-montserrat-reg'>{data[id].name}</h1>
        <div> 
          <span className=' text-dimGray text-16  font-products'>${data[id].price}</span>
        </div>
        <p className=' pt-2'>Tax included. Shipping calculated at checkout.</p>

        <div className='flex pt-4'>
            <IncreasingButton handleIncrease={handleIncrease} handleDecrease={handleDecrease} numberOfItems={numberOfItems} />
        </div>
        
        <div className=' pt-4'>
          <button onClick={() => handleAddToCart(data, id)} className='bg-li text-white py-2 px-6 text-18 font-Nunito w-full hover:bg-fuchsia-200 transition-colors  ease-in duration-100 hover:text-black'>Add to cart</button>
        </div>

        <div className='flex  flex-col'>
          <span className='text-18 font-Nunito'>Description</span>
          <p className='text-16 font-Nunito max-w-full'>
            {data[id].description}
          </p>
        </div>
      </div>
  </div>

    )
}

ItemInfo.propTypes = {
  data: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired, 
  handleAddToCart: PropTypes.func.isRequired,
  numberOfItems: PropTypes.number.isRequired,
  handleIncrease: PropTypes.func.isRequired,
  handleDecrease: PropTypes.func.isRequired,
  
}
export default ItemInfo