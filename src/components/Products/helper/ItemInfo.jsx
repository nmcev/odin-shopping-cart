import { useState } from 'react'
import PropTypes from 'prop-types'

function ItemInfo({data, id}) {
    const [numberOFItems, setNumberOfItems] = useState(1);

    const handleIncrease = () => {
      setNumberOfItems(numberOFItems + 1);
    }
  
    const handleDecrease = () => {
      if (numberOFItems > 1) {
        setNumberOfItems(numberOFItems - 1);
      }
    }

  return (
    <div className='flex md:mb-12 mb-9  md:pl-14 md:gap-32 max-sm:flex-col'>
    <img src={data[id].img} alt="" className='md:max-w-full max-w-44' width={400}/>
    <div className="md:max-w-96 max-w-48  text-12 gap-y-2 flex flex-col  max-sm:pt-5">
        <h1 className=' tracking-wider text-18 font-montserrat-reg'>{data[id].name}</h1>
        <div> 
          <span className=' text-dimGray text-16  font-products'>${data[id].price}</span>
        </div>
        <p className=' pt-2'>Tax included. Shipping calculated at checkout.</p>

        <div className='flex pt-4'>
         <div className='flex gap-6 border-2 border-border justify-start p-2 px-3 text-18 font-Nunito'>
           <button onClick={handleDecrease} className=' cursor-pointer'>
            <span> - </span>
           </button>

             <div>
              <span>{numberOFItems}</span>
            </div>

            <button onClick={handleIncrease} className=' cursor-pointer'>
             <span> + </span>
             </button>
          </div>
        </div>
        
        <div className=' pt-4'>
          <button className='bg-li text-white py-2 px-6 text-18 font-Nunito w-full hover:bg-transparent transition-colors delay-100 ease-in duration-300 hover:text-black'>Add to cart</button>
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
    description: PropTypes.string,
}
export default ItemInfo