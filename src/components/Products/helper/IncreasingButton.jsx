import { useState } from 'react'
function IncreasingButton() {
    const [numberOFItems, setNumberOfItems] = useState(1)
    const handleIncrease = () => {
        setNumberOfItems(numberOFItems + 1)
    }
    const handleDecrease = () => {
        if (numberOFItems > 1) {
            setNumberOfItems(numberOFItems - 1)
        }
    }
    
    return (
    <div className='flex flex-col '>
      <div className='flex gap-6 border-2 border-border justify-start p-2 px-3 text-18 font-Nunito'>
        <button onClick={handleDecrease} className='cursor-pointer'>
         <span> - </span>
        </button>

        <div>
         <span>{numberOFItems}</span>
        </div>

      <button   onClick={handleIncrease} className=' cursor-pointer'>
        <span> + </span>
      </button>
     </div>
   </div>
  )
}

export default IncreasingButton