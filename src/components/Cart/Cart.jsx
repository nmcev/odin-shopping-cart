import CartItem from "../Products/helper/CartItem"

function Cart() {
    
    return (
    <div className="pt-24 bg-silver flex justify-center">
        <div className=' max-w-6xl w-full  max-sm:h-auto max-sm:pb-4 flex flex-col gap-y-8 '>
            <div className='flex flex-col w-full pt-12 items-center'>
                <h2 className='uppercase font-montserrat-reg text-20'>Cart</h2>
            </div>
            
            <div className='border-b-2 border-border flex justify-between text-dimGray font-montserrat-reg px-6 pb-2 max-sm:hidden'>
                    <h5>Product</h5>
                 
                <div className='flex gap-16'>
                    <h5>Quantity </h5>                
                    <h5>Total</h5>
                </div>
            </div>
                <CartItem />
        </div>
     </div>
  )
}

export default Cart;
