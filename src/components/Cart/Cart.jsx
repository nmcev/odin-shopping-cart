import CartItem from "../Products/helper/CartItem"
import { useCart } from "../../hooks/CartContext"

function Cart() {
    
    const { handleRemoveItem, increaseQuantity, decreaseQuantity  } = useCart();
   
    const storedItems = JSON.parse(localStorage.getItem('shoppedItems')) || [];
    const totalPrice = storedItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const totalQuantity = storedItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
    <div className="pt-24 bg-silver flex justify-center pb-12">
        <div className=' max-w-6xl w-full  max-sm:h-auto max-sm:pb-4 flex flex-col gap-y-8  '>
            <div className='flex flex-col w-full pt-12 items-center '>
                <h2 className='uppercase font-montserrat-reg text-20'>Cart</h2>
            </div>
            
            <div className='border-b-2 border-border flex justify-between text-dimGray font-montserrat-reg px-6 pb-2 max-sm:hidden'>
                    <h5>Product</h5>
                 
                <div className='flex gap-16'>
                    <h5>Quantity </h5>                
                    <h5>Total</h5>
                </div>
            </div>
                {storedItems.length > 0 ? (
                    <>
                    <CartItem data={storedItems} handleRemoveItem={handleRemoveItem} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} />
                <div className="px-4 max-sm:text-16 border-t-2 border-border">
                    <div className='flex justify-between items-center pt-12'>
                        <h1 className='font-Nunito'>Total</h1>
                        <h1 className='font-Nunito'>${totalPrice}</h1>
                    </div>
                    <div className='flex justify-between items-center pt-12'>
                        <h1 className='font-Nunito'>Total Quantity</h1>
                        <h1 className='font-Nunito'>{totalQuantity}</h1>
                    </div>
                </div>
                </>
                ) : (
                    <div className='flex justify-center items-center h-96 divide-y-0'>
                        <h1 className='text-20 font-Nunito'>Your cart is empty</h1>
                    </div>
                )
                }
        </div>
        
    </div>
  )
}

export default Cart;
